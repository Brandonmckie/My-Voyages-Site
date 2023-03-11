const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote, Category } = require('../../models');
const withAuth = require('../../utils/auth');
const upload = require('../../utils/upload');

// GET api/posts
// get all posts
router.get('/', (req, res) => {
  Post.findAll({
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
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET api/posts/:id
// get individual post
router.get('/:id', (req, res) => {
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
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a post
// POST api/posts
router.post('/', upload.array('images'), (req, res) => {
  console.log(req.body);
  if (!req.files) {
    res.status(400).json('No files choosen to upload!')
    return;
  }
  const imgFile = req.files.map(file => file.path).join(' ');
  Post.create({
    title: req.body.title,
    content: req.body.content,
    images: imgFile,
    city: req.body.city,
    user_id: req.session.user_id,
    category_id: req.body.category_id
  })
    .then(dbPostData => {
      res.json(dbPostData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// vote on a post
// PUT api/posts/upvote
router.put('/upvote', withAuth, upload.any(), (req, res) => {
  // custom static method created in models/Post.js
  if (req.session) {
    Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  };
});

// unvote on a post
// PUT api/posts/unvote
router.put('/unvote', withAuth, upload.any(), (req, res) => {
  // custom static method created in models/Post.js
  if (req.session) {
    Post.unvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  };
});

// edit a post
// PUT api/posts/:id
router.put('/:id', withAuth, upload.array('images'), (req, res) => {
  if (!req.files) {
    res.status(400).json('No files choosen to upload!')
    return;
  }
  const imgFile = req.files.map(file => file.path).join(' ');
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
      images: imgFile,
      city: req.body.city,
      category_id: req.body.category_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a post
// DELETE api/posts/:id
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;