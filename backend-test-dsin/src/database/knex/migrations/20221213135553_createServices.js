exports.up = knex => knex.schema.createTable("services", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.decimal('value',14,2).notNullable();

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("services");
