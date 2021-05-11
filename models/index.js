const Product = require('./Product');
const SubTier = require('./SubTier');
const User = require('./User');

// SubTier.hasMany(Product, {
//     foreignKey: 'product_id',
// });

// User.belongsTo(SubTier, {
//     foreignKey: 'tierName',
// });

module.exports = { Product, SubTier, User };
