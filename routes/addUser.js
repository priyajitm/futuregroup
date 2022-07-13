const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async (request, response) => {
    const {firstname, lastname, email, contact} = request.body

    try {
        const user = await User.findOne({email: email})

        if (user) {
            res.status(409).send({ message: "User Exists!" });
        } else {
            const userData = newUser({
                firstName: firstname,
                lastName: lastname,
                email: email,
                contactNumber: contact
            })

            await userData.save()
            response.status(200).send({message: 'User Added'})
        }
    } catch (error) {
        res.status(500).send({message : "Database Error"})
    }
})

module.exports = router;