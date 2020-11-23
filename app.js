const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser');
var sass = require('sass');
// var result = sass.renderSync({file: public/css/style.css});

const app = express()
app.use(helmet())
app.use(bodyParser.json());
app.use(express.static('public'))

app.set('view engine', './views')

const port = 3000

app.get('/', (req, res) => {
    res.render('index.pug')
})


app.get('/signup', (req, res) => {
    res.render('signup.pug')
})
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/signup', function(req, res, next){

    console.log(req.body);
});


app.get('/signin', (req, res) => {
    res.render('signin.pug')
})
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/signin', function(req, res, next){

    console.log(req.body);
});


app.get('/admin', (req, res) => {
    res.render('admin.pug')
})

app.get('/chat', (req, res) => {
    res.render('chat.pug')
})



app.get('*', (req, res) => {
    res.status(404).render('404.pug')
})

app.listen(port, () =>
    console.log(`le serveur express est lancé sur le port ${port}`)
)