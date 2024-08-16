const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '4324',
    host: 'localhost',
    port: 5432,
    database: 'Games'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};