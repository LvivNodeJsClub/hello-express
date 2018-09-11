// Update with your config settings.

module.exports = {

    development: {
        client:     'pg',
        version:    '7.2',
        connection: {
            user:     'postgres',
            password: 'cheese',
            host:     'localhost',
            port:     5432,
            database: 'pizza'
        },
        migrations: {
            directory: 'config/migrations',
            tableName: 'migrations'
        }
    },

    test: {
        client:     'pg',
        version:    '7.2',
        connection: {
            user:     'postgres',
            password: 'cheese',
            host:     'localhost',
            port:     5432,
            database: 'pizza_test'
        },
        migrations: {
            directory: 'config/migrations',
            tableName: 'migrations'
        },
        seeds: {
            directory: __dirname + '/config/seeds/test'
        }
    },

    staging: {},

    production: {}

};
