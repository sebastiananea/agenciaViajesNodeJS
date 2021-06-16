import {Viaje} from '../models/viaje.js'
import {Testimonial} from '../models/testimoniales.js'

const paginaInicio = async (req, res) => {

    try {
            //Consultar 3 viajes del modelo

        const promiseDB = [];
        promiseDB.push(Viaje.findAll({ limit: 3 }))
        promiseDB.push(Testimonial.findAll({ limit: 3 }))

        const resultado = await Promise.all( promiseDB ) 

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }


}
const paginaNosotros =  (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaContacto = (req, res) => {
    res.send('Contacto')
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }

}

const paginaViajes =  async(req, res) => {
    //Consultar BBDD
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug }});
        res.render('viaje', {
            pagina:'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje

}