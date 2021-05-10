const router = require('express').Router();
const todoController  = require("../controller/todoController")

router.post('/addTodo',todoController.addTodo);

router.get('/getTodo',todoController.getTodo);

router.delete('/dltTodo/:id',todoController.dltTodo);



module.exports = router;