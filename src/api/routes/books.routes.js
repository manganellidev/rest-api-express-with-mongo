const express = require('express');

const router = express.Router();

const bookController = require('../book/bookController');

router.post('/book', bookController.create);
router.get('/book', bookController.find);
router.get('/book/:id', bookController.findById);
router.put('/book/:id', bookController.update);
router.delete('/book/:id', bookController.delete);

module.exports = router;
