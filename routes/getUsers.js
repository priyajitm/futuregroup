const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (request, response) => {
    try {
        const users = await User.find()
        response.send(users)
    } catch (error) {
        response.status(500).send({msg: 'Database Error'})
    }
})

module.exports = router;