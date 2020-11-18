const { Pool } = require('pg');
const config = require('config');
const connectionString = config.get('postgresURI');

const Pool = new Pool({
    connectionString: connectionString,
    ssl: true
});

module.exports = { pool }