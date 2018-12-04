const express = require('express')
const app = express()

const showRoute = require('./router/show')

app.use(express.urlencoded({extended: true}))

app.use('/show', showRoute)

app.get('*', (req, res) => {
  res.status(404).send({msg: 'route not found'})
})

app.listen(3000, () => console.log('listening 3000'))

module.exports = {
  app,
}