const express = require('express');
const app = express();
const port = 5001;
const departamentosRoutes = require('./routes/departamentosRoutes.js');
const municipiosRoutes = require('./routes/municipioRoutes.js');
const conexionDB = require('./config/db.js');


conexionDB();  

app.use(express.json());


app.use('/api', departamentosRoutes);
app.use('/api', municipiosRoutes);

app.listen(port, () => {
    console.log("servidor listo en puerto 5001");
});