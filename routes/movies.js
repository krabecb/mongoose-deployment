const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies')


// http:localhost:3000/movies 
    // // http:localhost:3000/movies/:id/reviews
        // need the identifier for the one (movie id)
        // id is used to find the movie document
        // we can update the reviews / write to the db 
// http://localhost:3000/reviews


/* GET new movie view. */
router.get('/new', moviesCtrl.new)

/* GET movies show view. */
router.get('/:id', moviesCtrl.show)

/* GET movies index view. */
router.get('/', moviesCtrl.index)

/* GET movies create. */
router.post('/', moviesCtrl.create)

module.exports = router;
