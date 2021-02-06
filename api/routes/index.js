const router = require('express').Router();

router.use('/connect', require('./connect')); 
router.use('/pin', require('./pin')); 
router.use('/profile', require('./profile')); 

module.exports = router;  