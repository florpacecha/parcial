const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productosRouter = require('./routes/ruta_productos.js'); 

// se inicia el servicio
const app = express();
const port = 3001;

// funciones que se ejecutan entre petición y respuesta que vamos a dar (middleware)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use('/productos', productosRouter);

// escuchamos en el puerto 3001
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
