const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;
const mainRouter = require('./routes/routes');
require('dotenv').config();
const connectDB = require('./db/connect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*app.get('/login.html',(req,res)=>{
    res.sendFile('/home/gundrapallytejesh/Documents/projects/html parsing/htmlCodes/login.html')
})*/
app.use('/', mainRouter);

// app.get('/',(req,res) =>{
//     res.sendFile(__dirname + '/main.html');
//   });

// app.post("/",(req,res)=>{
//     console.log(req.body)
//     const{username :name,email:mail}=req.body

//     res.json({msg:`"request recieved and your name :${name},mail is :${mail}"`})
// })

const start = async () => {
  try {
    await connectDB(process.env.mongo_URL);
    app.listen(port, console.log(`listening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
