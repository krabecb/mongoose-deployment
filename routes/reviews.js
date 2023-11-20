const express = require('express')
const router = express.Router()


// 1. import reviews controller
const reviewsCtrl = require('../controllers/reviews')

// add POST route for reviews create action 
// /movies/:id/reviews

// "/"

router.post('/movies/:id/reviews', reviewsCtrl.create)

// 2. create a post request for endpoint >> /movies/:id/reviews


module.exports = router