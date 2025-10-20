// routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Import the Item model

// POST /items -> Add a new item
router.post('/', async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    if (!name || !quantity || !price) {
      return res.status(400).json({ message: 'Please provide name, quantity, and price.' });
    }
    const newItem = new Item({ name, quantity, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// GET /items -> List all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;