exports.up = knex => knex.schema.createTable("schedules", table => {
    table.increments("id");
    table.timestamp("date").notNullable();
    table.text("name");
    table.text("phone");

    table.integer("id_service").references("id").inTable("services").onDelete("CASCADE");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("schedules");
