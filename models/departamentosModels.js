const mongoose = require('mongoose');

const DepartamentoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripción:{
        type : String,
        required: false

    }
});

const Departamento= mongoose.model('Departamento', DepartamentoSchema);


module.exports = Departamento;