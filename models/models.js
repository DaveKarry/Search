const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Email : {type: DataTypes.STRING, unique: true },
    Number : {type: DataTypes.STRING, unique: true},
    Password : {type: DataTypes.STRING, allowNull: false},
    Uname : {type: DataTypes.STRING, allowNull: false},
    Sname : {type: DataTypes.STRING, allowNull: false},
    Tname : {type: DataTypes.STRING},
    Role : {type: DataTypes.STRING, defaultValue: "USER"},
    Status : {type: DataTypes.STRING, defaultValue: "ACTIVE"},
});


const City = sequelize.define('city', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
    Description: {type: DataTypes.STRING},
})

const Event = sequelize.define('event',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
    Target: {type: DataTypes.STRING, allowNull: false},
    Date: {type: DataTypes.DATEONLY},
    Status: {type: DataTypes.STRING, defaultValue: "ACTIVE"},
    Description: {type: DataTypes.STRING},
})

const UsersEvent = sequelize.define('usersEvent', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Badge = sequelize.define('badge',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
    Description: {type: DataTypes.STRING},
})

const UsersBadge = sequelize.define('usersBadge',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Status: {type: DataTypes.STRING, allowNull: false, default: "DEACTIVE"}
})

City.hasMany(User)
User.belongsTo(City)


City.hasMany(Event)
Event.belongsTo(City)

Event.belongsToMany(User, { through: UsersEvent})
User.belongsToMany(Event, { through: UsersEvent})

User.belongsToMany(Badge, { through: UsersBadge})
Badge.belongsToMany(User, { through: UsersBadge})

module.exports = {
    User,
    Event,
    City,
    Badge,
    UsersEvent,
    UsersBadge
}