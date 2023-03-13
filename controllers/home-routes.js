const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Category } = require('../models');

// render homepage
router.get('/', (req, res) => {
  res.render('index', {
    loggedIn: req.session.loggedIn,
    hero:{
      video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
      content: "My Voyages simplifies travel planning through social interaction, resulting in trusted travel reviews.",
      class:"hero-heading hero-heading-home fadeIn-element first-tittle"
    }
  });
});

// render homepage
router.get('/about', (req, res) => {
  res.render('about', {
    loggedIn: req.session.loggedIn,
    hero:{
      video: "/public/html5-videos-22/About-Video2.mp4",
      content: "About Us",
      class:"hero-heading hero-heading-home fadeIn-element"
    }
  });
});

// login page
router.get('/login-signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  };

  res.render('login-signup', {
    loggedIn: req.session.loggedIn
  });
});



module.exports = router;