const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/setModer/:id',checkRole("ADMIN"), userController.setRole)

router.get('/auth', authMiddleware ,userController.check)
router.get('/', userController.getAll)
router.get('/:id', userController.getOne)


router.put('/ban/:id',checkRole("ADMIN"),userController.banedStatus)

module.exports = router