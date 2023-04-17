const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
const {
  homepage,
  loginpage,
  registerpage,
  login,
  register,
} = require('../controllers/task');

// router.get('/',(req,res) =>{
//     res.sendFile('/home/gundrapallytejesh/Documents/projects/html parsing/htmlCodes/main.html');
// });

router.route('/').get(homepage);
router.route('/login.html').get(loginpage);
router.route('/register.html').get(registerpage);
router.route('/login').post(login);
router.route('/register').post(register);
// router.post("/",(req,res)=>{
//     console.log(req.body)
//     const{username :name,email:mail}=req.body

//     res.json({msg:`"request recieved and your name :${name},mail is :${mail}"`})
// })

module.exports = router;
