const express = require("express");
const employeeRouter = require('./router/employee');
const mongo = require('./shared/connect');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
// to convert req.body into json format
app.use(express.json());
mongo.connect();
app.use('/', (req,res,next) => {
    //Authorization, Authentication
    console.log("Hello middleware");
    next();
});

// app.get('/users', (req,res,next) => {
//     res.send({
//         name:'sathiyapriya',
//         age: 25
//     })
// })

app.use('/employee', employeeRouter);



app.listen(3001);

// mongodb atlas connection string
// mongodb+srv://Gsathiya:FmAWfKqmHPKxHznc@cluster0.ktemn.mongodb.net/test