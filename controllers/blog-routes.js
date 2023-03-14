const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Category } = require('../models');

// get all posts for blogpage
router.get('/:id', (req, res) => {
  if (req.params.id == 0) {
    Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'images',
        'city',
        'category_id',
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
              Obj.blogFeed = true;
            };
          };
        });
        res.render('blog-page', {
          posts: postsImgArr,
          loggedIn: req.session.loggedIn,
          gmaps: process.env.GMAPS,
          hero:{
            video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
            content: "Itinerary Blogs",
            class:"hero-heading hero-heading-home fadeIn-element"
          },
          footer:{
            video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
            content: "My \n Voyages",
            pTop: true
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    Post.findAll({
      where: {
        category_id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'content',
        'images',
        'city',
        'category_id',
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
              Obj.blogFeed = true;
            };
          };
        });
        res.render('blog-page', {
          posts: postsImgArr,
          loggedIn: req.session.loggedIn,
          gmaps: process.env.GMAPS,
          hero:{
            video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
            content: "Itinerary Blogs",
            class:"hero-heading hero-heading-home fadeIn-element"
          },
          footer:{
            video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
            content: "My \n Voyages",
            pTop: true
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// GET /city/:city
// get all posts by city name
router.get('/city/:city', (req, res) => {
  Post.findAll({
    where: {
      city: req.params.city
    },
    attributes: [
      'id',
      'title',
      'content',
      'images',
      'city',
      'category_id',
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
      if (posts[0] === undefined) {
        res.render('blog-page', {
          noData: true
        });
        return;
      }
      const postsImgArr = posts.map(post => Object.assign({}, post, { images: (post.images.split(' ')) }));
      postsImgArr.forEach((Obj) => {
        for (const key in Obj) {
          if (key == 'images') {
            Obj[key] = Obj[key].map(string => '\\' + string);
            Obj.blogFeed = true;
          };
        };
      });
      res.render('blog-page', {
        posts: postsImgArr,
        loggedIn: req.session.loggedIn,
        gmaps: process.env.GMAPS,
        hero:{
          video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
          content: "Itinerary Blogs",
          class:"hero-heading hero-heading-home fadeIn-element"
        },
        footer:{
          video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
          content: "My \n Voyages",
          pTop: true
        }
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
      'images',
      'city',
      'category_id',
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize data for handlebars rendering
      const post = dbPostData.get({ plain: true });
      const postImgArr = Object.assign({}, post, { images: (post.images.split(' ')) });
      for (const key in postImgArr) {
        if (key == 'images') {
          postImgArr[key] = postImgArr[key].map(string => '\\' + string);
        };
      };
      res.render('single-blog', {
        post: postImgArr,
        loggedIn: req.session.loggedIn,
        gmaps: process.env.GMAPS,
        hero:{
          video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
          content: "Itinerary Blogs",
          class:"hero-heading hero-heading-home fadeIn-element"
        },
        footer:{
          video: "/public/html5-videos-22/My Voyages (Vercion 1)website.mp4",
          content: "My \n Voyages",
          pTop: true
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;