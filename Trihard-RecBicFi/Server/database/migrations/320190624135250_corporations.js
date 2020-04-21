exports.up = function (knex, Promise) {
    return knex.schema.withSchema('corporations')
        .createTable('enterprises', function (table) {
            table.increments('id').unsigned().primary();
            table.string('name').notNullable();
            table.string('description').notNullable();
            table.integer('costBottle')
            table.integer('costGlass')
            table.integer('costMetal')
            table.integer('costPaper')
            table.string('phone').unique();
            table.string('email').notNullable();
            table.string('longitud').notNullable();
            table.string('latitud').notNullable();
            table.integer('calificacion')
            table.binary('image')
            table.string('imageType')
            table.integer('localidad_id').references('id').inTable(('catalogs.localities'))
            table.timestamps(true, true);
        })
        .createTable('products', function (table) {
            table.increments('id').unsigned().primary();
            table.string('name').notNullable();
            table.string('description').notNullable();
            table.string('unit').notNullable();
            table.binary('image');
            table.string('imageType');
            table.timestamps(true, true);
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.withSchema('corporations')
        .dropTableIfExists('enterprises')
        .dropTableIfExists('products');
};

