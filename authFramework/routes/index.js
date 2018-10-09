var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GoogleStrategy has an internal identifier as google
//then we ask google(with scope) what access to give us access to profile and email
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
  })
)

router.get('/current_user', (req, res)=>{
  res.send(req.user);//send back the current user
})

router.get('/logout', (req, res)=>{
  req.logout();//destroys cookie
  res.send(req.user);
})


router.get('/auth/google/callback', passport.authenticate('google'))

module.exports = router;
