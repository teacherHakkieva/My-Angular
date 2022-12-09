const router = require('express').Router();
const authController = require('./controllers/authController')
const courseController = require('./controllers/courseController');

router.get('/', (req, res) => {
  
    let token = req.headers['X-Authorization'] | 'nothing'
    res.json(token)
    
})

router.use('/users',authController)
    
module.exports = router;