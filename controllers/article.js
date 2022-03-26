// import database connection
const con = require('../utils/db');

// Show all articles - index page
const getAllArticles = (req, res) =>{
    let query ="SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    })
};

// Show article by this slug

const getArticleBySlug = (req,res) =>{
    let query = `SELECT * , author.name as author_name, article.name as article_name FROM author  iNNER JOIN article ON author.id = article.author_id WHERE slug="${req.params.slug}"`
    let article
    con.query(query, (err,result) => {
        if (err) throw err;
        article= result
        console.log(article)
        res.render('article', {
            article: article
        })
    });
};

// export controller functions

module.exports = {
    getAllArticles,
    getArticleBySlug
};