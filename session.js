const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Configurando el middleware de sesión
app.use(session({
  secret: 'tu_secreto_super_secreto',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Para desarrollo; en producción, debería ser true si estás usando HTTPS
}));

// Ruta de inicio que accede a la sesión
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.type('text/html');
    res.send(`<p>Vistas: ${req.session.views}</p><p>Expira en: ${(req.session.cookie.maxAge / 1000)} segundos</p>`);
  } else {
    req.session.views = 1;
    res.end('Bienvenido a tu primera visita!');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
