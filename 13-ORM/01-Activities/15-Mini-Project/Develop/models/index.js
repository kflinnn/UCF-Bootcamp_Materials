const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

// TODO: Create Association
Traveller.belongsToMany(Location, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
});

// TODO: Create Association
Location.belongsToMany(Traveller, {
    foreignKey: 'traveller_id',
});

module.exports = { Traveller, Location, Trip };
