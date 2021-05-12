const Product = require('./Product');
const Subtier = require('./Subtier');
const User = require('./User');


Product.belongsTo(Subtier,{
    foreignKey: 'tier_id',
});

// Product.hasMany(Product, {
//     foreignKey: 'id',
// });

// Subtier.hasMany(User,{
//    foreignKey: 'tier_id'
// //    through: {
// //     model: Subtier,
// //     unique: false
// //   },
// })

User.belongsTo(Subtier, {
    foreignKey: 'tier_id',
});


module.exports = { Product, Subtier, User };
