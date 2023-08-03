const express = require("express");
const router = express.Router();



router.get("/",function(req,res){

    let page = req.query.page;
    console.log("[QUERY]");
    console.log(page);

    res.send({"key":"value"});
})

router.post("/postapi",function(req,res){
    let body = req.body;
    console.log(body);
    res.send("POST API");

})

router.get("/about", function(req,res){
    res.send('About page');
})

module.exports = router;