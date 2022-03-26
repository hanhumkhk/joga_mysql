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

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))


app.get('/author/:id', (req,res) => {
    let query = `SELECT *, article.name AS Title FROM article INNER JOIN author ON article.author_id = author.id WHERE author.id="${req.params.id}"`;
    let articles = []
    let author = `select name from author where author.id="${req.params.id}"`;
    con.query(query, (err,result) => {
        if (err) throw err;
        articles = result
        con.query(author, (err, result) => {
            if (err) throw err;
            let authorData = result
            res.render('author', {
                author: authorData,
                articles: articles
            })
        })
    })
});

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

// to use article route
app.use('/', articleRoutes);
app.use('/article', articleRoutes);

// app start
app.listen(3000, () => {
    console.log("APP iS started at http://localhost:3000");
});