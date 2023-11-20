const express = require('express')
const router = express.Router()

const performersCtrl = require('../controllers/performers')
// new  - '/performers/new' - GET
router.get('/performers/new', performersCtrl.new)

// create - '/performers/' - POST
router.post('/performers/',  performersCtrl.create)


// addToCast -> association between a movie + performer (performer data -> objectId of the performer)

router.post('/movies/:id/performers', performersCtrl.addToCast)

module.exports = router