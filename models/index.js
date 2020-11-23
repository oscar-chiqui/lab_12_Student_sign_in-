//setting up the database connection
//using student.js to create the database table, finds out if it is being run locally or postgres
let {Sequelize, DataTypes } = require('sequelize')

//figuring out if running locally or production/heroku
let env = process.env.NODE_ENV || 'development'
//read in config.json and figure out what environment we're running on
let config = require(__dirname + '/../config.json')[env]

//create database object
let db = {}

if(config.use_env_variable){
    //set up for heroku
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    //set up for local dev
    sequelize = new Sequelize(config)
}

//read in model info, create model, set up database tables
let model = require('./student.js')(sequelize, DataTypes)
db[model.name] = model

db.sequelize = sequelize
db.Sequelize = Sequelize

//export the database
module.exports = db
