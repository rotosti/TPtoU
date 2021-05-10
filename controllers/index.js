const router = require('express').Router();

const appRoutes = require('./appRoutes/appRoutes.js');
const apiRoutes = require('./api/apiRoutes.js');

router.use('/', appRoutes);
router.use('/', apiRoutes);

module.exports = router;
