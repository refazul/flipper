const express = require('express')
const app = express()
const port = 8081

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', './views')

app.get('*', function (req, res) {
    res.render('main', { title: 'Welcome' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

