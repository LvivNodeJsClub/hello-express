// Update with your config settings.
//const path = require('path');

module.exports = {
    client:     'pg',
    version:    '7.2',
    connection: {
        user:     'postgres',
        password: '',
        host:     'localhost',
        port:     5432,
        database: 'pizza'
    },
    migrations: {
        directory: 'config/migrations',
        tableName: 'migrations'
    }
};
