exports.up = function (knex, Promise) {
    return knex.schema.withSchema('processes')
        .createTable('reservations', function (table) {
            table.increments('id').unsigned().primary();
            table.integer('user_id').references('id').inTable('persons.users');
            table.integer('enterprise_id').references('id').inTable(('corporations.enterprises'))
            table.string('state')
            table.integer('cotizacionAprox')
            table.integer('product_id').references('id').inTable(('corporations.products'));
            table.string('reservation_date').notNullable();
            table.string('reservation_hour').notNullable();
            table.timestamps(true, true);
        })
        .createTable('notifications', function (table) {
            table.increments('id').unsigned().primary();
            table.string('state')
            table.string('description')
            table.integer('user_id').references('id').inTable(('persons.users'))
            table.integer('reservation_id').references('id').inTable(('processes.reservations'))
            table.timestamps(true, true);
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.withSchema('processes')
        .dropTableIfExists('reservations')
        .dropTableIfExists('notifications')
};
