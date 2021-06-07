// const express = require('express'); Common JS
import express from 'express' //Para que esto funcione, en package.json, agrego "type" : "module"
import router from './routes/index.js' //hay que colocar la extension del archivo
const app  = express();

//Definir puerto
const port = process.env.PORT || 4000; 

//Habilitar pug
app.set('view engine', 'pug')

//Devolver año actual para el footer
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    return next()
})

//carpeta publica, css e img
app.use(express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto: ${port}`)
})