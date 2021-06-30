const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole("MODERATOR"), eventController.create)
router.get('/',eventController.getAll)
router.get('/:id',eventController.getOne)
router.delete('/:id',checkRole("MODERATOR"),eventController.deactivateOne)
router.put('/:id',checkRole("MODERATOR"), eventController.updateEvent)
router.post('/:id/join', eventController.joinEvent)

module.exports = router