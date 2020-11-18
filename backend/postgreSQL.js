const { Pool } = require('pg');
const config = require('config');
const connectionString = config.get('postgresURI');

const config_psql = {
    user: 'postgres',
    host: 'db',
    database: 'inge',
    password: 'password',
    port: 5432,
};

const pool = new Pool(config_psql);

module.exports = { pool }