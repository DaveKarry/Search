const Router = require('express')
const router = new Router()
const eventRouter = require('./EventRouts')
const cityRouter = require('./CityRouts')
const userRouter = require('./UserRouts')



router.use('/user', userRouter)
router.use('/city',cityRouter)
router.use('/event',eventRouter)


module.exports = router