const express = require('express')
const cors = require('cors')
const app = express()
const port = 8081

app.use(cors());

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', './views')

app.get('*', function (req, res) {
    res.render('main', { title: 'Welcome' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

