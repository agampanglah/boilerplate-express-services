
// CONNECTION DB POSTGRESS
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      port: process.env.DB_PORT,
      logging: false,
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
)

