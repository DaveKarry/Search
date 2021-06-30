const Router = require('express')
const router = new Router()
const profileController = require('../controllers/profileController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')


router.get('/', profileController.getSelfOne)


module.exports = router