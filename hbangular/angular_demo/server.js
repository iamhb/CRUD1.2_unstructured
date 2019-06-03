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

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.get('/', function(req, res) 
	{
    	res.sendFile(path.join(__dirname + '/index.html'));
    	// app.use(express.static(path.join(__dirname, 'public')));
	});  
//app.get('/css')
app.listen(8080);
   // create todo and send back all todos after creation
app.post('/api/addData', function(req, res) {
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
        });
    });

app.get('/api/showData', function(req, res) {
        var db = mongoose.connect('mongodb://localhost:27017/hbdbdemo' ,{ useNewUrlParser: true });
        //var modelVarObj = new modelVar();
        // use mongoose to get all todos in the database
        modelVar.find(function(err, data) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            console.log(data);
            res.json(data); // return all todos in JSON format
        });
    });


app.post('/api/removeValue',function(req,res){
  console.log("In Server Remove");
  console.log("values:" + req.body.remVar);

    modelVar.remove( {"fname": req.body.remVar },function (err, docs) {
                    if(err)
                        {
                            res.status(500).json(err);
                        }
                    else if(docs)
                        {
                            console.log(docs);
                            console.log("del successfully");
                            res.status(200).json(docs);
                        }
});
  });