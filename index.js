const express = require('express');
require('dotenv').config();
//Crear sservidor express
const app =  express();

console.log(process.env);

// Acessp añ directorio publico
app.use(express.static('public'));

//Crear rutas
app.use('/api/auth', require('./routes/auth'));

//Configuración del puerto

app.listen(process.env.PORT, () => {
    console.log(`BackEnd corriendo en el puerto ${process.env.PORT}`);
})