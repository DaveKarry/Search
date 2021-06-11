const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

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
        console.log("hello",req.user.id, req.user.Email, req.user.Role)
        return res.json({token})
    }

}


module.exports = new UserController()