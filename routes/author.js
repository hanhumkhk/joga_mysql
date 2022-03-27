const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

router.get('/', authorController.getAllArticlesByAuthor);
//router parameters
router.get('/:id', authorController.getAllArticlesByAuthor);

module.exports = router;