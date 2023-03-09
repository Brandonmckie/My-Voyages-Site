const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');

// render homepage
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/blog-upload', (req, res) => {
  res.render('blog-upload');
})

// get all posts for blogpage
router.get('/blog', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'content',
      'images',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // serialize data for handlebars rendering
      const posts = dbPostData.map(post => post.get({ plain: true }));
      const postsImgArr = posts.map(post => Object.assign({}, post, { images: (post.images.split(' ')) }));
      postsImgArr.forEach((Obj) => {
        for (const key in Obj) {
          if (key == 'images') {
            Obj[key] = Obj[key].map(string => '\\' + string);
          };
        };
      });
      console.log(postsImgArr);
      res.render('blog-page', {
        posts: postsImgArr,
        loggedIn: req.session.loggedIn,
        heroBlog: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single blog post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'content',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize data for handlebars rendering
      const post = dbPostData.get({ plain: true });

      res.render('single-blog', {
        post,
        loggedIn: req.session.loggedIn,
        heroBlog: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;