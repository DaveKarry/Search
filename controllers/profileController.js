const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, City} = require('../models/models')

class ProfileController{

    async getSelfOne(req, res){
        try{
            const token =req.headers.authorization.split(' ')[1]
            if (!token){
                return res.status(401).json({message: "Не авторизован"})
            }
            const {email} = jwt.verify(token, process.env.SECRET_KEY)
            const user = await User.findOne(
                {
                    where: { email } 
                }
            )
            if (user){
                return res.status(200).json({user})
            }
            return res.status(201).json({message: "Не авторизован"})

        }catch(e){
            return res.status(401).json({message: "Не авторизован"})
        }
    }
}

module.exports = new ProfileController()