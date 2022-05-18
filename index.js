const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

// todo - admin
// DK8M26VX0FZHpJe5

app.get('/', (req, res) => {
    res.send('Todo server')
})

app.listen(port, () => {
    console.log(`server running  on port ${port}`)
})