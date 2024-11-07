const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamentosControllers.js')

router.get('/departamentos',departamentoController.obtenerdpto)
router.post('/departamentos',departamentoController.crearDpto)
router.put('/departamentos/:id',departamentoController.updateDpto) 
router.delete('/departamentos/:id',departamentoController.deleteDpto) 

module.exports = router;
