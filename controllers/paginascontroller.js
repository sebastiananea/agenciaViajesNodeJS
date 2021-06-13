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
    console.log(viajes)




    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaContacto,
    paginaTestimoniales,
    paginaViajes

}