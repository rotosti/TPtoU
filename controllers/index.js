const router = require('express').Router();

const appRoutes = require('./appRoutes/appRoutes.js');
const apiRoutes = require('./api/apiRoutes.js');

router.use('/api', apiRoutes);
router.use('/', appRoutes);


module.exports = router;
