
exports.up = function(knex) {
    return knex.schema.createTable('species', tbl => {
        tbl.increments() // the type of the primary key is integer w/o negative values, also called unsigned
        tbl.string('name', 255).notNullable()
    })
    .createTable('animals', tbl => {
        tbl.increments()
        tbl.string('name', 255).notNullable()

        // define foreign keys
        tbl
            .integer('species_id')
            .unsigned()
            .references('id')
            .inTable('species')
            .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be 'RESTRICT', 'DO NOTHING', 'SET NULL' etc
            .onUpdate() // about changing the value of the primary key

    })

  
};

exports.down = function(knex) {
  
};
