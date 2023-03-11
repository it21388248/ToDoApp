//require express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//invoke express
const app = express();
//use cors
app.use(cors());



//use express.json() to get data into json format
app.use(express.json());



//import routes
const TodoItemRoute = require('./routes/todoItems');





//declare a port
const PORT= 8000; 

//listen the application
app.listen(PORT,()=>{
    console.log('Server is up and running on port number :',PORT)
})


//create db connection

const DB_URL = 'mongodb+srv://kavindi:kavi123@mernapp.1iygwv5.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongodb connection success!");
}).catch((err)=>  console.log("unsuccess!",err));

////////////////////////////////////////////////////////////////////////////////////////////////////


app.use('/',TodoItemRoute);