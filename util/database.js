const Sequelize = require('sequelize')

const sequelize = new Sequelize('node_ecommerce', 'node_ecommerce', 'node_ecommerce', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize