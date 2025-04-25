import express from 'express'
import bodyParser from 'body-parser'
import todoRoutes from './routes/todos.js'

const app = express()
const port = 3009

app.use(express.json()); // JSON body jaoks
app.use(express.urlencoded({ extended: true })); // form-urlencoded body jaoks

app.use(bodyParser.json())
app.use('/todos', todoRoutes)
app.get('/json-test', (req, res) => {
    res.send({message: 'json oke'})
})

app.listen(port, () => {
    console.log('server is connected at port '+port)
})