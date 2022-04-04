const express = require('express');
const app = express();
app.use(express.json());

const registerController = require('./Controllers/registerController');
const loginController = require('./Controllers/loginController');
const userController = require('./Controllers/userController');


app.post('/register',registerController.registering);
app.post('/login',loginController.logging_in);
app.get('/user/:id',userController.retrievedata);
app.post('/user/:id',userController.updatedata);


app.listen(7001,()=>{
    console.log("Hello, Server started and running at port number 7001");
})