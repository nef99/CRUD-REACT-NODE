import sequelize from 'sequelize'
const db = new sequelize('library', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

export default db
