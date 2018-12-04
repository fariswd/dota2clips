const {
  create,
  readAll,
  readById,
  updateById,
  deleteById
} = require('../model/showModel')

const latest = (req, res) => {
  readAll((err, result) => {
    if(err) res.status(500).send({msg: result})
    res.send({
      msg: 'latest',
      result
    })
  })
}

const detail = (req, res) => {
  readById(req.params.id, (err, result) => {
    if (err) res.status(500).send({ msg: result })
    res.send({
      msg: 'detail',
      result
    })
  })
}

const postNewShow = (req, res) => {
  create(req.body, (err) => {
    if(err) res.status(500).send({msg: 'Cannot Write Document'})
    res.send({
      msg: 'new show',
      newPost: req.body
    })
  })
}

const editShow = (req, res) => {
  updateById(req.params.id, req.body, (err, result) => {
    if(err) res.status(500).send({msg: result})
    res.send({
      msg: 'edit show',
      id: req.params.id,
      newData: req.body,
      result
    })
  })
}

const deleteShow = (req, res) => {
  deleteById(req.params.id, (err, result) => {
    if(err) res.status(500).send({msg: result})
    res.send({
      msg: 'delete show',
      id: req.params.id,
      result
    })
  })
}

module.exports = {
  latest,
  detail,
  postNewShow,
  editShow,
  deleteShow
}