const router = require('express').Router();
const { product, subtier , user } = require('../../models');

// GET all subtiers
router.get('/', async (req, res) => {
  try {
    const subtierData = await subtier.findAll();
    res.status(200).json(subtierData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single subtier
router.get('/:id', async (req, res) => {
  try {
    const subtierData = await subtier.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
     
    });

    if (!subtierData) {
      res.status(404).json({ message: 'No subtier found with this id!' });
      return;
    }

    res.status(200).json(subtierData);
  } catch (err) {
    res.status(500).json(err);
  }
});