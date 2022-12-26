//Modules and Globals
//Loads environment variables from a .env file
require('dotenv').config()
//Required node through Express
const express = require('express')
//Express app initialized
const app = express()
const methodOverride = require('method-override')
//Express Settings
//JSX View Engine
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine ('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'))
//Controllers & Routes
//HTTP require for places page
app.use('/places', require('./controllers/places'))
//HTTP require for Hello World! page Home Page
app.get('/', (req, res) => {
    res.render('home')
})
//HTTP require for 404 page
app.get('*', (req, res)=> {
    res.render('error404')
})
//Port variable pulled from env file
app.listen(process.env.PORT)