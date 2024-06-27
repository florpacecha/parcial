const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto_controller.js');

// obtener todos los productos
router.get('/productos', productoController.obtenerProductos);

// obtener producto por id
router.get('/productos/:id', productoController.obtenerProductoPorId);

// crear un producto
router.post('/productos', productoController.crearProducto);

// actualizar un producto
router.put('/productos/:id', productoController.actualizarProducto);

// eliminar un producto
router.delete('/productos/:id', productoController.eliminarProducto);

// obtener productos ordenados
router.get('/productos/ordenados', async (req, res) => {
    const productosOrdenados = await productoController.obtenerProductosOrdenados();

    res.status(200).json({
        message: 'Productos ordenados por nombre',
        productos: productosOrdenados
    });
});

module.exports = router;
