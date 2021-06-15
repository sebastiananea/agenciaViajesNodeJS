import {Viaje} from '../models/viaje.js'

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
}
const paginaNosotros =  (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaContacto = (req, res) => {
    res.send('Contacto')
}

const paginaTestimoniales =  (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
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