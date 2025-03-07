const express = require('express');
const router = express.Router();

// Route for homepage that displays team member info
router.get('/', (req, res) => {
    res.render('index'); // Render 'index' view with group info
});

module.exports = router;

