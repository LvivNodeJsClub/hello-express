// Update with your config settings.

module.exports = {

    development: {
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
    },

    test: {
        client:     'pg',
        version:    '7.2',
        connection: {
            user:     'postgres',
            password: '',
            host:     'localhost',
            port:     5432,
            database: 'pizza_test'
        },
        migrations: {
            directory: 'config/migrations',
            tableName: 'migrations'
        }
    },

    staging: {},

    production: {}

};
