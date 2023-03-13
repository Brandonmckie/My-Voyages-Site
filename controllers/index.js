const router = require('express').Router();

const api = require('./api/');
const homeRoutes = require('./home-routes');
const blogRoutes = require('./blog-routes');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', api);

module.exports = router;
