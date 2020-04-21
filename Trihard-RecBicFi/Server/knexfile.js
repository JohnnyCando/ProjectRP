;
const databaseData = {
    client: process.env.CLIENT || 'pg',
    connection: process.env.CONNECTION_DB || {
        host: 'localhost',
        port: '5432',
        user: 'trihard_user',
        password: '123456',
        database: 'trihard_recbic_db'
    }
};

module.exports = {

    development: {
        migrations: {tableName: 'knex_migrations', directory: './database/migrations'},
        seeds: {directory: './database/seeds'},
        client: databaseData.client,
        connection: databaseData.connection

    },
};
