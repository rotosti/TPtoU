const router = require('express').Router();
const withAuth = require('../../utils/withAuth');
const { User } = require('../../models');

router.get('/', async (req, res) => {
    res.render('landingpage')
});

router.get('/dashboard', withAuth, (req, res) => {

    res.render('dashboard');
})


module.exports = router;