const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

// Función para encontrar un puerto disponible
const startServer = (startingPort) => {
  const server = app.listen(startingPort)
    .on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Puerto ${startingPort} en uso, intentando con el siguiente...`);
        startServer(startingPort + 1);
      }
    })
    .on('listening', () => {
      const port = server.address().port;
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
};

// Iniciar el servidor comenzando con el puerto 3000
startServer(3000);