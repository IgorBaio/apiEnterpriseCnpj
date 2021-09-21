'use strict'

const express = require('express');
const router = express.Router();
const EnterprisesController = require('../controllers/enterprises_controller');

// Rotas do sistema
router.get('/', EnterprisesController.get);
router.post('/',EnterprisesController.post);
router.delete('/',EnterprisesController.delete);

module.exports = router;