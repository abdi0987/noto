var express = require('express');
var Todo = require('../models/todo');
var router = express.Router();

/* GET home page. */

router.route('/todo')
    .post(function(req,res){
        var todo = new Todo();
        
        todo.text = req.body.text;
        todo.completed = false;
        
        todo.save(function(err){
            if(err)
                res.send(err)
            
            res.json({message:"todo created"});
        })
    })
    
    .get(function(req,res){
        Todo.find(function(err,todo){
            if(err)
                res.send(err)
            
            res.json(todo)
        })
    })
    
    
router.route('/todo/:todo_id')
    .get(function(req,res){
        Todo.findById(req.params.todo_id,function(err,todo){
            if(err)
                res.send(err)
            
            res.json(todo)
        })
    })
    
    .put(function(req,res){
        Todo.findById(req.params.todo_id,function(err,todo){
            if(err)
                res.send(err);
            
            todo.text = req.body.text;
            todo.completed = req.body.completed;
            
            todo.save(function(err){
                if(err)
                    res.send(err)
                
                res.json({message:"Todo Updated"})
            })
        })
    })
    
    .delete(function(req,res){
        Todo.remove({_id:req.params.todo_id},function(err,todo){
            if(err)
                res.send(err);
            
            res.json({message:"Deleted Todo"})
        })
    })


module.exports = router;
