const http = require('http');
const express =require('express');

const app =express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path= require('path');

 
 var modelVar = require('./models/DBmodel');

app.listen(3000,() =>{
console.log("server listening the port 3000");
});

app.get('/', function(req, res) 
	{
    	res.sendFile(path.join(__dirname + '/index.html'));
    	// app.use(express.static(path.join(__dirname, 'public')));
	});  
app.listen(8080);

   // create todo and send back all todos after creation

    app.post('/api/todos', function(req, res) {
    	console.log("in server api");
    	console.log("values:" + req.body);

    	var db = mongoose.connect('mongodb://localhost:27017/hbdbdemo' ,{ useNewUrlParser: true });
    	var modelVarObj = new modelVar();

    	modelVarObj.fname=req.body.fname
    	modelVarObj.lname=req.body.lname
    	modelVarObj.age=req.body.age
        // create a todo, information comes from AJAX request from Angular
        modelVarObj.save((err)=>{
      		res.send(modelVarObj);
     	 	console.log("ADDED");
  			 

            // get and return all the todos after you create another
           /* db.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });*/
        });

    });
