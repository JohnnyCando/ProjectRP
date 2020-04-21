
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catalogs.localities').del()
    .then(function () {
      // Inserts seed entries
      return knex('catalogs.localities').insert([
        {id: 1, name: 'Quito'},
        {id: 2, name: 'Guayaquil'},
        {id: 3, name: 'Cuenca'}
      ]);
    });
};
