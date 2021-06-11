const {City} = require('../models/models')
const ApiError = require('../error/ApiError')

class CityController{
    async create(req,res){
        const {Name, Description} = req.body
        const city = await City.create({Name, Description})
        return res.json(city)
    }

    async getAll(req,res){
        const cities = await City.findAll()
        return res.json(cities)
    }

    async getOne(req,res){
        const {id} = req.params
        const city = await City.findOne(
            {
                where: {id}
            }
        )
        return res.json(city)
    }
}


module.exports = new CityController()