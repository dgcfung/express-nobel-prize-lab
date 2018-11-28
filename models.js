const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'nobel_prizes_db',
  dialect: 'postgres',
  operatorsAliases: false
});

const Prize = sequelize.define('prize', {
  year: Sequelize.INTEGER,
  category: Sequelize.STRING,
  motivation: Sequelize.TEXT
});

module.exports = {
  sequelize,
  Prize
};
