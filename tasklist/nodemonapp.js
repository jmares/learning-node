var express = require("express");
var port = 8081;
var app = express();
app.listen(port);

var taskList = [];
app.get('/list', function(req, res) {
    res.send(taskList);
})

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/task', function(req, res) {
    taskList.push(req.body.task);
    res.send(taskList);
})

app.put('/task/:task_index', function(req, res) {
    var taskIndex = req.params.task_index;
    taskList[taskIndex] = req.body.task;
    res.send(taskList);
});

app.delete('/task/:task_index', function(req,res){
    var taskIndex = req.params.task_index;
    taskList.splice(taskIndex, 1);
    res.send(taskList);
})