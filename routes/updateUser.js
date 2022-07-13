const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/:email', async (request, response) => {
    try {
        const user = await User.findOneAndUpdate({email: request.params.email}, {contactNumber: request.params.contact})

        if (user) {
            response.status(200).send({message: 'User Contact Updated'})
        } else {
            response.status(404).send({message: 'User Not Found'})
        }
    } catch (error) {
        response.status(500).send({message: 'Database Error'})
    }
})

module.exports = router