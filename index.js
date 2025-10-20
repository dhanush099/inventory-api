// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// 1. BUILT-IN MIDDLEWARE
app.use(express.json()); // To parse JSON bodies

// 2. CUSTOM MIDDLEWARE
// Logger middleware to log request method and URL
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next(); // Pass control to the next middleware/route handler
};
app.use(logger);

// 3. ROUTES
// GET / -> returns "Inventory API is Running"
app.get('/', (req, res) => {
  res.send('Inventory API is Running');
});

// GET /health -> returns server status message
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is healthy'
  });
});

// --- Routes ---
const itemRoutes = require('./routes/item');

app.get('/', (req, res) => { /* ... */ });
app.get('/health', (req, res) => { /* ... */ });

// Use the item routes for any request to /items
app.use('/items', itemRoutes);

// 4. 404 NOT FOUND MIDDLEWARE
// This should be the last route
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Start the server (move to the bottom later)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});