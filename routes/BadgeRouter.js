const Router = require('express')
const router = new Router()
const badgeController = require('../controllers/badgeController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole("ADMIN"), badgeController.create)
router.get('/', badgeController.getAll)



module.exports = router