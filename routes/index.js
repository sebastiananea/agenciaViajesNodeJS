import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('inicio')
})
router.get('/contacto', (req, res) => {
    res.send('Contacto')
})
router.get('/nosotros', (req, res) => {
    const viaje = 'Viajes a Alemania';
    res.render('nosotros', {
        viaje
    })
})

export default router;