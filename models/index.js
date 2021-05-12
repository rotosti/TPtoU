const Product = require('./Product');
const SubTier = require('./SubTier');
const User = require('./User');



SubTier.hasMany(Product, {
    foreignKey: 'id',
});

Product.hasOne(SubTier,{
    foreignKey: 'product_id',

});

User.hasOne(SubTier, {
    foreignKey: 'id',
});

SubTier.hasMany(User,{
   foreignKey: { allowNull : false } 
})

module.exports = { Product, SubTier, User };
