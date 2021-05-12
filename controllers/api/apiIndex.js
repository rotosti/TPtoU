const router = require('express').Router();
const productRoutes = require('./productRoutes');
const subtierRoutes = require('./subtierRoutes');
const userRoutes = require('./userRoutes');
// const apiRoutes = require('./apiRoutes');

router.use('/product', productRoutes);
router.use('/subtier', subtierRoutes);
router.use('/user', userRoutes);
// router.use('/api', apiRoutes)

module.exports = router;