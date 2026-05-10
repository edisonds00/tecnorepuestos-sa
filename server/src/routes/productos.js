// server/src/routes/productos.js
const express = require('express');
const router = express.Router();

// Simulamos un almacén en memoria para la prueba
let productos = [];

// POST /api/v1/productos
router.post('/', (req, res) => {
  const { nombre, precio_unitario } = req.body;
  if (!nombre || precio_unitario === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }
  const nuevo = {
    id: productos.length + 1,
    nombre,
    precio_unitario,
    stock_actual: 0,
    stock_minimo: 0
  };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

module.exports = router;