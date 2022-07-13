const express = require('express')
const router = express.Router()
const movies = require('../movies.json')


//console.log(JSON.parse(MOVIE_LIST))
router.get('/', async (req, res) => {
    try {
        res.json(movies)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router