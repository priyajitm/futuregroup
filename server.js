const express = require('express')

const app = express()

app.use('/movies', require('./routes/movies'))
app.use('/getuser', require('./routes/getUsers'))
app.use('/adduser', require('./routes/addUser'))
app.use('/deleteuser', require('./routes/deleteUser'))

app.listen(4000, () => {
    console.log('Server Started')
})