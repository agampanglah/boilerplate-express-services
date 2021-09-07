const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./api/middleware/errorHandler")
const webRoutes = require("./api/routes/web")

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

// Web Routes
app.use("/", webRoutes);

// Handle Error
app.use(errorHandler);

app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header(
        "Access-Control-Allow-Origin", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        req.header("Access-Control-Allow-Method", "PUT, POST, DELETE, PATCH, GET");
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    const error     = new Error('Not Found');
    error.status    = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;

