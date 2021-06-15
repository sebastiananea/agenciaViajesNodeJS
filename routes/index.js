import express from 'express';
import { guardarTestimonial } from '../controllers/testimonialController.js';
import {
    paginaContacto,
    paginaInicio,
    paginaNosotros, 
    paginaTestimoniales,
    paginaDetalleViaje, 
    paginaViajes,
} 
    from '../controllers/paginascontroller.js'

const router = express.Router();

router.get('/', paginaInicio);

router.get('/contacto', paginaContacto)

router.get('/nosotros', paginaNosotros);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

export default router;