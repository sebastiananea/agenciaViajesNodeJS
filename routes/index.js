import express from 'express';
import {paginaContacto, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes} from '../controllers/paginascontroller.js'

const router = express.Router();

router.get('/', paginaInicio);

router.get('/contacto', paginaContacto)

router.get('/nosotros', paginaNosotros);

router.get('/testimoniales', paginaTestimoniales);

router.get('/viajes', paginaViajes);

export default router;