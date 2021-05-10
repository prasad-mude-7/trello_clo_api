const router = require('express').Router();
const progressController  = require("../controller/progressController")

router.post('/addProgress',progressController.addProgress);

router.get('/getProgress',progressController.getProgress);

router.delete('/dltProgress/:id',progressController.dltProgress);

module.exports = router;