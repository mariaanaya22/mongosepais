const mongoose = require('mongoose');

const municipioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripción: {
        type: String,
        required: false
    },
    departamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departamento'
    }
});

const municipio = mongoose.model('municipio', municipioSchema);

module.exports = municipio;