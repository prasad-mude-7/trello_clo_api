const express = require('express');

const Todo = require('../model/todoModel');

const User = require('../model/userModel');

const session = require('express-session');

const Board = require('../model/boardModel')



exports.addTodo = async (req,res) =>{
    console.log(req.body)
  
    Todo.create({
        title:req.body.title,
        player:await User.findOne({email:req.body.email}),
        board :await Board.findOne({boardTitle:req.body.boardTitle}),
        invite : req.body.todoeinvitt
        
    },(err,data) =>{
        if(err) return res.status(500).send(err)
        res.status(200).send(data)
    })
}

//getAll Product
exports.getTodo = (req,res) => {
    Todo.find({}). 
    populate('player','email').
    populate('board').
        exec((err,data) => {
            if(err) return res.status(500).send(err)
            // data.map((item)=>{
               res.status(200).send(data)
            // })
            // res.status(200).send(data)
            // if(data.player.email === session.Store.email){res.status(200).send(data)}
        })
    
    }

// delete note
exports.dltTodo = (req,res) => {
    // let Id = mongo.ObjectID(req.params.id);
    //findByAndDelete also works
    Todo.findByIdAndRemove({ _id:req.params.id },(err,data) => {
        if(err) return res.status(500).send(err)
            res.status(200).send(data)
    })
}



// exports.getProductList = (req,res)=>{
//         Product.find({},
//             (err,data)=>{
//                 if(err) return res.status(500).send('Error')

//             res.status(200).json({data})
//             })
// }
