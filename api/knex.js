let connection = process.env.PG_CONNECTION_STRING;
if(process.env.PG_SSL_CA){
    connection = {
        connectionString: process.env.PG_CONNECTION_STRING,
        ssl:{
            ca: process.env.PG_SSL_CA.replace(/\\n/g, '\n')
        }
    }
}

module.exports = require('knex')({
    client: 'pg',
    connection: connection,
});