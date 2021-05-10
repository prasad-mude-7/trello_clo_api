const express = require('express');

const Progress = require('../model/progressModel');

const User = require('../model/userModel');

const session = require('express-session');

const Board = require('../model/boardModel')

exports.addProgress =async (req,res) =>{
    // console.log("login>>>",session.Store)
    Progress.create({
        title:req.body.title,
        player:await User.findOne({email:req.body.email}),
        board :await Board.findOne({boardTitle:req.body.boardTitle}),
        invite : req.body.todoeinvitt
        
    },(err,data) => {
        if(err) return res.status(500).send(err)
        res.status(200).send(data)
    })
}

//getAll Product
exports.getProgress = (req,res) => {
    Progress.find({}).
    populate('player','email').
    populate('board').
        exec((err,data) => {
            if(err) return res.status(500).send(err)
            res.status(200).send(data)
        })
    
    }

// delete note
exports.dltProgress = (req,res) => {
    // let Id = mongo.ObjectID(req.params.id);
    //findByAndDelete also works
    Progress.findByIdAndRemove({ _id:req.params.id },(err,data) => {
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
