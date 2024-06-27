const { Sequelize, DataTypes } = require('sequelize');
const bd = require('../bd/bd.js'); 

const Producto = bd.define('producto', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  tableName: 'productos' // la tabla en la base de datos
});


module.exports = Producto;
