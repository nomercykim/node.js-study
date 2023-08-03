// const express = require('express');
// const router = express.Router();



// router.get("/",function(req,res){
//     res.render('index', {titile:"EJS 메인페이지"});

// })

// router.get("/about", function(req,res){
//     res.send('About page');
// })


// router.post("/postapi",function(req,res){
//     let body = req.body;
//     console.log(body);
//     res.send("POST API");

// })


// module.exports = router;



const express = require('express')
const router = express.Router()



// Home page route
router.get('/', function (req, res) {
 res.render('index.ejs',{"title":"EJS 메인페이지"})
})


router.post('/', function (req, res) {
 res.send({"key":"value"})
})


// About page route
router.get('/about', function (req, res) {
 res.send('어바웃 페이지')
})

module.exports = router;