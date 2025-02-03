// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
// Import controllers if needed
// Placeholder for now
router.get('/', (req, res) => {
    res.json({ message: 'List of products' })
})

module.exports = router;