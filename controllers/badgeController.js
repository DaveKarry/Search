const {Badge, UsersBadge, User} = require('../models/models')
const jwt = require('jsonwebtoken')


class BadgeController{
    async create(req,res){
        const {Name, Description} = req.body
        const badge = await Badge.findOne({
            where: {Name}
        })
        if (!badge){
            const badge = await Badge.create({Name, Description})
            return res.status(200).json(badge)
        }
        return res.status(400).json({message: "Бейдж с таким именем уже существует"})

    }

    async getAll(req,res){
        const badges = await Badge.findAll()
        return res.json(badges)
    }

    async joinBadge(req,res){
        try{
            const {id} = req.params
            const badge = await Badge.findOne({
                where: {id}
            })
            if (!badge){
                return res.status(404).json({message: "badge not found"})
            }
            const token =req.headers.authorization.split(' ')[1]
            console.log(token)
            if (!token){
                return res.status(401).json({message: "Не авторизован"})
            }
            const {email} = jwt.verify(token, process.env.SECRET_KEY)
            console.log(email)
            const user = await User.findOne(
                {
                    where: { email } 
                }
            )
            console.log(user)
            let userId = user.Id
            let badgeId = badge.Id
            console.log(badgeId, userId)
            const table = await UsersBadge.findOne({
                where: {userId, badgeId}
            })
            console.log(table)
            if (!table){
                const userBadge = await UsersBadge.create({userId,badgeId})
                console.log(userBadge)
                return res.send({message: "joined"})
            }
            return res.status(400).json({message: "already joined"})
        }catch(e){
            res.status(401).json({message: "Не авторизован"})
        }
    }
}

module.exports = new BadgeController()