import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Inicio')
})
router.get('/contacto', (req, res) => {
    res.send('Contacto')
})
router.get('/nosotros', (req, res) => {
    res.send('Nosotros')
})

export default router;