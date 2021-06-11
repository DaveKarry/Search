require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const router  = require('./routes/index')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHendlingMiddleware')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true,}));
app.use('/api', router)
// обработка ошибок всегда ласт
app.use(errorHandler)




const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`Сервер поднят на http://localhost:${PORT}...`)
    })
  }
  catch (e){
    console.log(e)
  }

}

start()

