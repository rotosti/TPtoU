const router = require('express').Router();
const productRoutes = require('./productRoutes');
const subtierRoutes = require('./subtierRoutes');
const userRoutes = require('./userRoutes');

router.use('/product', productRoutes);
router.use('/subtier', subtierRoutes);
router.use('/user', userRoutes);

module.exports = router;