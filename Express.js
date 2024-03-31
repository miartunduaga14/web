const express = require('express');
const app = express();
const port = 3000;

// Ruta del Hola Mundo
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Manejo de rutas
app.get('/acerca', (req, res) => {
  res.send('Acerca de nosotros');
});

app.get('/contacto', (req, res) => {
  res.send('Página de contacto');
});

// API Básica con JSON
app.get('/api/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Carlos' }
  ];
  res.json(usuarios);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
