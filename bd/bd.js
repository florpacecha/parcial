const { Sequelize } = require('sequelize');

// conexión a la base de datos
const bd = new Sequelize('parcial', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
});

// para inicializar y conectar a la base de datos
const initialize = async () => {
    try {
        await bd.authenticate();
        await bd.sync({ alter: true });
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error(error);
        console.log('Error al conectar a la base de datos.');
    }
};

initialize();

module.exports = bd;
