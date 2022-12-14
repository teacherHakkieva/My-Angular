const router = require('express').Router();
const authController = require('./controllers/authController')
const courseController = require('./controllers/courseController');
const homeController = require('./controllers/homeController');


//router.get('/', (req, res) => {
//  
//    let token = req.headers['X-Authorization'] | 'nothing'
//    res.json(token)
//    
//})

router.use('/users',authController)
router.use('/courses', courseController)  
router.use('/',homeController)
module.exports = router;