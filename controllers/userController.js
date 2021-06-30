const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, City} = require('../models/models')

const generateJWT = (id, email, role) =>{
    return jwt.sign(
        {id: id, email,role }, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}


class UserController{
    async registration(req,res, next){
        const {Email, Password, Uname, Sname} = req.body
        if (!Email||!Password||!Uname||!Sname){
            return next(ApiError.badRequest("Пустые поля"))
        }
        const candidate = await User.findOne({where: {Email}})
        if (candidate){
            return next(ApiError.badRequest("Пользователь с такой почтой зарегистрирован"))
        }
        const hashPassword = await bcrypt.hash(Password, 3)
        const admin = await User.findOne({where: {Role: "ADMIN"}})
        let role = "USER"
        if (!admin){
            role = "ADMIN" 
        }
        const user = await User.create({Email, Uname, Sname, Password: hashPassword, Role: role})
        //генерация jwt-токена, внутри вшиваем айдишник, почту и роль
        const token = generateJWT(user.id, Email, role)
        return res.json({token})

    }

    async login(req,res, next){
        const {Email, Password} = req.body
        const user = await User.findOne({where: {Email}})
        if(!user){
            return next(ApiError.badRequest("Нет пользователя с такой почтой"))
        }
        let comparePassword = bcrypt.compareSync(Password, user.Password)
        if (!comparePassword){
            return next(ApiError.badRequest("Пароль неверный"))
        }
        const token = generateJWT(user.id, Email, user.Role)
        return res.json({token})

    }

    async check(req,res, next){
        const token = generateJWT(req.user.id, req.user.Email, req.user.Role)
        return res.json({token})
    }

    async banedStatus(req,res){
        let {id} = req.params
        const user = await User.findOne({where: {Id: id}})
        if (user.Status == "ACTIVE"){
            User.update(
                {
                    Status: "BAN"
                },
                {
                    where: {id}
                }
            )
            return res.send({message: "user has been baned"})
        }
        else{
            User.update(
                {
                    Status: "ACTIVE"
                },
                {
                    where: {id}
                }
            )
            return res.send({message: "user has been disbaned"})
        }
    }


    async setRole(req, res){
        console.log("tttt")
        let {id} = req.params
        const user = await User.findOne({where: {Id: id}})
        if (user.Role == "USER"){
            User.update(
                {
                    Role: "MODERATOR"
                },
                {
                    where: {id}
                }
            )
            return res.send({message: "Now user is moderator"})
        }
        else if (user.Role == "MODERATOR"){
            User.update(
                {
                    Role: "USER"
                },
                {
                    where: {id}
                }
            )
            return res.send({message: "now user isn't moderator"})
        }
        else{
            return res.send({message: "User is ADMIN"})
        }
    }

    async getAll(req,res){
        let users
        users = await User.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'Password']
            },
            include: [{
                model: City,
                attributes:['Name']
            }]

        })
        return res.json(users)
    }

    async getOne(req, res){
        const id = req.params.id
        const user = await User.findOne(
            {
                where: {id}
            }
        )
        return res.json(user)
    }

    
}


module.exports = new UserController()