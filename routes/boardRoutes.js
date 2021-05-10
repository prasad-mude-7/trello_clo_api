const router = require('express').Router();
const boardController  = require("../controller/boardController")

router.post('/addBoard',boardController.addBoard);

router.get('/getBoard',boardController.getBoard);

router.delete('/dltBoard/:id',boardController.dltBoard);

router.put('/udtBoard',boardController.udtBoard);



module.exports = router;