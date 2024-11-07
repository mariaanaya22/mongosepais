const dpto = require('../models/departamentosModels.js');


const obtenerdpto = async(req,res) => {
    try {
        const departaments = await dpto.find();
        res.json(departaments);
    } catch (error) {
       res.status(500).json({mensaje: "erro al obtener departamento"})
        
    }
}

const crearDpto = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoDpto = new dpto({ nombre });
    await nuevoDpto.save();
    res.json({ mensaje: "creado", nuevoDpto });
  } catch (error) {
   res.status(500).json({ 
      mensaje: "Error al obtener departamento en el post", 
    
    });
  }
};




const updateDpto = async (req, res) => {
  try {
    let {id}=req.params;
    let{ nombre, descripcion} = req.body;
    if (!nombre ||!descripcion) {
      return res.json({msj:'los nombres estan vacios'})
    }
    else{
      let dptoActualizadp= await dpto.findByIdAndUpdate(id,{nombre,descripcion})
      res.json({msj:'actualizado', dptoActualizadp})
    }
  } catch (error) {
    res.json({msj:'error en el update'})
    
  }
}

const deleteDpto = async (req, res) => {
  const {id} = req.params;
  let dptoEliminado = await dpto.findByIdAndDelete(id);
  if(!dptoEliminado){
 res.json({msj:"departamneto no encontrado"})
  }
  else{
    res.json({msj:"departamneto eliminado", dptoEliminado})
  }
}


module.exports ={obtenerdpto,crearDpto, updateDpto, deleteDpto}