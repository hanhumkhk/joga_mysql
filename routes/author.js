const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

router.get('/', authorController.getAllArticlesByAuthor);

module.exports = router;