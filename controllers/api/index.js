const router = require('express').Router();

// api endpoints
const userRoutes = require('./user-routes');

// uses end point modules to find route
router.use('/users', userRoutes);

module.exports = router;