const express = require('express');
const router = express.Router();
const articleController = require('../controllers/author');

router.get('/', articleController.getAllArticlesByAuthor);

module.exports = router; 