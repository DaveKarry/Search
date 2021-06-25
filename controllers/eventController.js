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
        console.log(req.params.id)
        const event = await Event.findOne(
            {
                where: {id}
            }
        )
        return res.json(event)
    }

    async deactivateOne(req,res){
        console.log("here")
        let {id} = req.params  
        Event.update(
            {Status: "DEACTIVATE"},
            {
                where: {id}
            }
        )
        return res.send({message: "event was deactevated"})
        
    }


    async updateEvent(req,res){
        try{
            const id = req.params.id;
            Event.update(req.body, {
                where: { id: id }
            })
            return res.send({message: "updated"})
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
        

    }
}


module.exports = new EventController()