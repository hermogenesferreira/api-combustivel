const { Sequelize } = require('sequelize');
const conn = require('../config/database');

const Nfe = conn.define('nfes', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  gasStation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  key: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  buyDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

Nfe.sync();
module.exports = Nfe;
