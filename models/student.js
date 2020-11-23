//exporting a function
module.exports = (sequelize, DataTypes) => {

    //describes how a student object will be structured
    // & how student table in database will be structured

    let Student = sequelize.define('Student', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }) //end of Student

    //create tables in database, will overwrite any old database tables (if force is true)
    //returns a promise
    Student.sync( {force: false} ).then( () => {
        console.log('Synced student table ')
    })

    return Student
} //end function export