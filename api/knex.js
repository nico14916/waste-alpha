let connection = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
}
if(process.env.PG_SSL_CA){
    connection.ssl = {
        rejectUnauthorized: true,
        ca: process.env.PG_SSL_CA.replace(/\\n/g, '\n')
    }
}
console.log(connection);
module.exports = require('knex')({
    client: 'pg',
    connection: connection,
});