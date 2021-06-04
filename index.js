// const express = require('express'); Common JS
import express from 'express' //Para que esto funcione, en package.json, agrego "type" : "module"
import router from './routes/index.js' //hay que colocar la extension del archivo
const app  = express();

//Definir puerto
const port = process.env.PORT || 4000; 

//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto: ${port}`)
})