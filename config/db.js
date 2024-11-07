const mongoose = require('mongoose');

const conexionDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mafeanaya2005:Samu123@cluster0.j66ftli.mongodb.net/pais_db?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("conectada a la base de datos"); 

    } catch (error) {
        console.log("error al conectar", error); 
    }
};

module.exports = conexionDB;
