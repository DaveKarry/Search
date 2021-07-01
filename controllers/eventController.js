const {Event, City, User, UsersEvent} = require("../models/models")
const ApiError = require('../error/ApiError')
const { getOne } = require("./userController")
const jwt = require('jsonwebtoken')


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
            events = await Event.findAll({
                where: {},
                include:
                [
                    {
                        model: City,
                        where: {},
                        required: true,
                        attributes:['Name']
                    }
                ]
            })
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
        const city = await City.findOne(
            {
                where: {id: event.cityId}
            }
        )
        event.cityId = city
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

    async joinEvent(req,res){
        try{
            const {id} = req.params
            const event = await Event.findOne(
                {
                    where: {id}
                }
            )
            if (!event){
                return res.status(404).json({message: "event not found"})
            }
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
            let userId = user.Id
            let eventId = event.Id
            const table = await UsersEvent.findOne({
                where: {userId, eventId}
            })
            if (!table){
                event.addUser(user)
                return res.send({message: "joined"})
            }
            return res.status(400).json({message: "already joined"})
        }catch(e){
            res.status(401).json({message: "Не авторизован"})
        }
        
    }

    async getUserList(req, res){
        const { id } = req.params
        const event = await Event.findByPk(id, {
            include: [{
                model: User,
                attributes: ["id", "UName", "Tname", "Sname", "Email"],

            },
            {
                model: City,
                attributes: ["Name"]
            }
            ]
        }
        )
        if (!event){
            return res.status(404).json({message: "not found"})
        }
        return res.status(200).json(event)
        
    }
}


module.exports = new EventController()