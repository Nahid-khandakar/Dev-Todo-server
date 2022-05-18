const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

// todo - admin
// DK8M26VX0FZHpJe5


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fjsrw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {
        await client.connect();
        const taskCollection = client.db("dev-todo").collection("userTask");

        app.post('/task', async (req, res) => {
            const taskData = req.body
            console.log(taskData)

            const result = await taskCollection.insertOne(taskData)
            return res.send({ success: true, result })
        })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Todo server')
})

app.listen(port, () => {
    console.log(`server running  on port ${port}`)
})