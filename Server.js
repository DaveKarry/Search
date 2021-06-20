require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const router  = require('./routes/index')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHendlingMiddleware')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs');


const app = express()
const PORT = process.env.PORT || 3000

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true,}));
app.use('/api', router)
app.get('/', (req, res) => {
  res.send('Документацию посмотри на /api-docs')
})
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

