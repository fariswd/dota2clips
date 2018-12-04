const admin = require('firebase-admin')
var serviceAccount = require('../credential.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
var db = admin.firestore()

var showRef = db.collection('show')

const create = (payload, cb) => {
  showRef.doc().set({
    ...payload,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(res => {
    cb(false)
  })
  .catch(err => {
    cb(true)
  })
}

const readAll = (cb) => {
  showRef.get()
  .then(snapshot => {
    let result = []
    snapshot.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    cb(false, result)
  })
  .catch(err => {
    cb(true, {msg: err})
  })
}

const readById = (id, cb) => {
  showRef.doc(id)
  .get()
  .then(doc => {
    cb(false, {
      id,
      ...doc.data()
    })
  })
  .catch(err => cb(true, err))
}

const updateById = (id, payload, cb) => {
  // const {
  //   title,
  //   dateTurnament,
  //   thumbnail,
  //   tags,
  //   stream,
  //   dotaBuffUrl
  // } = payload
  showRef.doc(id).update(payload)
  .then(res => {
    cb(false, res)
  })
  .catch(err => {
    cb(true, err)
  })
}

const deleteById = (id, cb) => {
  showRef.doc(id).delete()
  .then(result => {
    cb(false, result)
  })
  .catch(err => {
    cb(true, err)
  })
}


module.exports = {
  create,
  readAll,
  readById,
  updateById,
  deleteById
}