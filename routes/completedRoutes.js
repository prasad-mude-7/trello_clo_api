const router = require('express').Router();
const completedController  = require("../controller/completedController")

router.post('/addCompleted',completedController.addCompleted);

router.get('/getCompleted',completedController.getCompleted);

router.delete('/dltCompleted/:id',completedController.dltCompleted);

module.exports = router;