console.log('loading router module')
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    let d = new Date();
    console.log('Time: ', d.toString())//just to log request time
    next()
})
// define the home page route(we using handler function chaining for one route)
router.route('/')
    .get((req, res)=>{
        console.log('someone got on our home route', req.body)
        res.send('welcome to our humbled page')
    })
    .post((req, res)=>{
        console.log('someone is trying to post something')
    })
    .delete((req, res)=>{
        res.send("let's delete your account")//we'll use ajax request for it
    })

module.exports = router;