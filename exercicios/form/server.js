const express = require('express')
const app = express()
const bodyParser = require('body-Parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuario',(req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens</h1>')
})

app.listen(3003)