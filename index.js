// const express = require('express'); Common JS
import express from 'express' //Para que esto funcione, en package.json, agrego "type" : "module"
import router from './routes/index.js' //hay que colocar la extension del archivo
import db from './config/db.js'

const app  = express();

//Conectar a la base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch( error => console.log(error))

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

//Devolver el titulo para el index
app.use((req, res, next) => {
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next()
})

//carpeta publica, css e img
app.use(express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto: ${port}`)
})