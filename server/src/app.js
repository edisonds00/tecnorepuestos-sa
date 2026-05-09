require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Rutas (se agregarán después)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app; // para pruebas