import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
})
router.get('/contacto', (req, res) => {
    res.send('Contacto')
})
router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
})

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
})

router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    })
})

export default router;