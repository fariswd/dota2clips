const Router = require('express').Router()

const controller = require('../controller/showController')

Router.get('/', controller.latest)
Router.get('/:id', controller.detail)
Router.post('/', controller.postNewShow)
Router.put('/:id', controller.editShow)
Router.delete('/:id', controller.deleteShow)

module.exports = Router