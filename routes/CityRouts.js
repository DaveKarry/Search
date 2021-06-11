const Router = require('express')
const router = new Router()
const cityController = require('../controllers/cityContsroller')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole("ADMIN"), cityController.create)
router.get('/', cityController.getAll)
router.get('/:id', cityController.getOne)


module.exports = router