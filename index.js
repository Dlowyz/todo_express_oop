import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3009

app.use(bodyParser.json())

app.get('/json-test', (req, res) => {
    res.send({message: 'json oke'})
})

app.listen(port, () => {
    console.log('server is connected at port '+port)
})