const {Badge} = require('../models/models')


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
}

module.exports = new BadgeController()