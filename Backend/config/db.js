
const CONFIG_BD = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL,
    port: process.env.DB_PORT //Puerto predeterminado de PostgreSQL
}

module.exports = {
    CONFIG_BD ,
};