const knex = require('./knex');

module.exports = async () => {

    // CREATE TABLES
    let version = 0;
    if (await knex.schema.hasTable('meta')) {
        version = (await knex('meta').select('value').where({ meta: 'db_version' }))[0].value;
    } else {
        await knex.schema.createTable('meta', (details) => {
            details.increments('id').primary();
            details.string('meta');
            details.integer('value');
        });
        await knex('meta').insert({ meta: 'db_version', value: 0 });
    }

    if (version == 0) {
        await knex.schema.createTable('users', (table) => {
            table.increments('id').primary();
            table.string('email', 100).unique();
            table.string('phone', 20).unique();
            table.binary('hash', 60);

            table.string('firstname', 100);
            table.string('lastname', 100);

            table.integer('pin', 6);
        }).createTable('cities', (table) => {
            table.increments('id').primary();
            table.string('city', 100);
        }).createTable('addresses', (table) => {
            table.increments('id').primary();
            table.integer('userID').unsigned().references('id').inTable('users');
            table.string('address', 100);
            table.integer('cityID').unsigned().references('id').inTable('cities');
            table.decimal('lat', 10, 8);
            table.decimal('lng', 11, 8);
        }).createTable('wastes', (table) => {
            table.increments('id').primary();
            table.integer('userID').unsigned().references('id').inTable('users');
            table.integer('addressID').unsigned().references('id').inTable('addresses');
            table.string('type', 100);
            table.integer('quantity', 3);
        });
        
        version++;
        await knex('cities').insert([{ city: 'Montreal' }, { city: 'Laval' }]);
    }
    

    await knex('meta').where({ meta: 'db_version' }).update({ value: version });
}