const Product = require('./Product');
const Subtier = require('./Subtier');
const User = require('./User');

Product.belongsTo(Subtier,{
    foreignKey: 'tier_id',
});

User.belongsTo(Subtier, {
    foreignKey: 'tier_id',
});

module.exports = { Product, Subtier, User };