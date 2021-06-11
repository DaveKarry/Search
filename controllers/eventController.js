const {Event, City} = require("../models/models")
const ApiError = require('../error/ApiError')

class EventController{
    async create(req,res, next){
        try{
            const {Name, Target, Date, Description, cityId} = req.body
            const event = await Event.create({Name,Target, Date, Description,cityId})
            return res.json(event)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req,res){
        let {cityId} = req.query
        let events
        if(!cityId){
            events = await Event.findAll()
        }
        if(cityId){
            events = await Event.findAll({where: {cityId}})
        }
        return res.json(events)
    }

    async getOne(req,res){
        const {id} = req.params
        const event = await Event.findOne(
            {
                where: {id}
            }
        )
        return res.json(event)
    }
}


module.exports = new EventController()