const Router = require('express')
const router = new Router()
const eventRouter = require('./EventRouts')
const cityRouter = require('./CityRouts')
const userRouter = require('./UserRouts')
const profileRouter = require('./ProfileRouts')



router.use('/user', userRouter)
router.use('/city',cityRouter)
router.use('/event',eventRouter)
router.use('/profile',profileRouter)

module.exports = router