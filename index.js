// application packages
const express = require('express')
const app = express()
const path = require('path')
// add template engine
const hbs = require('express-handlebars');
// setup template engine dir and file extensions
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine ({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
}))
// setup static public directory
app.use(express.static('public'));

const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))


let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_mysql"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected to joga_mysql db");
})

const articleRoutes = require('./routes/article'); // import article route
const authorRoutes = require('./routes/author');

// to use article route
app.use('/', articleRoutes);
app.use('/article', articleRoutes);
app.use('/author/:id', authorRouters);

// app start
app.listen(3000, () => {
    console.log("APP iS started at http://localhost:3000");
});