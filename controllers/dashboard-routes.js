const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Category } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'content',
      'images',
      'city',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Category,
        attributes: ['category_name']
      },
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
      res.render('dashboard', { 
        posts: postsImgArr, 
        loggedIn: true,
        gmaps: process.env.GMAPS
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// gets the post to be edited
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'title',
      'content',
      'images',
      'city',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Category,
        attributes: ['category_name']
      },
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
      if (dbPostData) {
        // serialize data for handlebars rendering
        const post = dbPostData.get({ plain: true });
        const postImgArr = Object.assign({}, post, { images: (post.images.split(' ')) });
        for (const key in postImgArr) {
          if (key == 'images') {
            postImgArr[key] = postImgArr[key].map(string => '\\' + string);
          };
        };
        res.render('edit-post', {
          post: postImgArr,
          loggedIn: true,
          gmaps: process.env.GMAPS
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;