
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
            .onUpdate('CASCADE') // about changing the value of the primary key

    })
    .createTable('zoos', tbl => {
        tbl.increments()
        tbl.string('name', 255).notNullable()
        tbl.string('address', 255).notNullable()
    })
    .createTable('animal-zoos', tbl => {
        tbl.increments()
        tbl
            .integer('zoo-id')
            .unsigned()
            .references('id')
            .inTable('zoos')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl
            .integer('animal-id')
            .unsigned()
            .references('id')
            .inTable('animals')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.date('to').notNullable()
        tbl.date('from')
    })

  
};

exports.down = function(knex) {
  
};
