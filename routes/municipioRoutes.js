const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipioControllers.js');

router.get('/municipios', municipioController.obtenerMuni)
router.post('/municipios',municipioController.crearMuni)
router.put('/municipios/:id',municipioController.updatemuni)
router.delete('/municipios/:id',municipioController.deletemuni)
module.exports = router;
