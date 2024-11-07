const muni = require('../models/municipioModels.js');

const obtenerMuni = async(req, res) => {
    try {
        const municipios = await muni.find();
        res.json(municipios);
    } catch (error) {
       res.status(500).json({mensaje: "Error al obtener municipios"})
        
    }
}

const crearMuni = async(req, res) => {
    try {
        const {nombre, departamento_id} = req.body;
        const nuevoMuni = new muni({nombre, departamento_id});
        await nuevoMuni.save();
        res.json({mensaje: "Municipio creado exitosamente"});
    } catch (error) {
        res.status(500).json({mensaje: "Error al crear municipio"});
    }
}

const updatemuni = async (req, res) => {
    try {
        let {id}= req.params;
        let {nombre,descripcion}= req.body;
        if(!nombre || !descripcion) {
            return res.json({mensaje: "los nombres estan vacios en muni"})
        }else{
        let muniActualizado = await muni.findByIdAndUpdate(id);
         res.json({mensaje: "actualizado", muniActualizado})
        }
    } catch (error) {
        res.json({mensaje:"error en el update" })
    }
}

const deletemuni =async (req, res) => {
    const {id} = req.params;
    let muniEliminado = await muni.findByIdAndDelete(id);
    if (!muniEliminado) {
        res.json({mensaje: "No se encontro el municipio"})
    } else{
        res.json({mensaje: "eliminado", muniEliminado})
    }
 }

module.exports = {obtenerMuni, crearMuni, updatemuni, deletemuni}