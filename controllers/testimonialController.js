//import { request } from "express"
import { Testimonial } from '../models/testimoniales.js'

const guardarTestimonial = async (req, res) => {
    
    //Validar...
    const errores = [];
    const {nombre, correo, mensaje} = req.body;
    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'})
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    //Mostrar errores en la vista
    if(errores.length > 0){
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        });

    } //ALmacenar en la base de datos
      else{
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }

}



export {guardarTestimonial}