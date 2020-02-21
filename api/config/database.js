import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('HelloNode','root','',{
    dialect: 'mysql',
    port: '3306'
})

export default sequelize