const router = require('express').Router();
const { product, subtier ,user } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const productData = await product.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single product
router.get('/:id', async (req, res) => {
  try {
    const productData = await product.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
     
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});