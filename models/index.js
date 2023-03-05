// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
// One to many relationship between user and post
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// through table connection between user and post via vote
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// one to one relationship between a vote 
// and a user and a vote and a post
Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// many to many relationship between user and votes
// and post and votes.
User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

// one to one relatioship between a comment and a user
// and a comment and a post
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// One to many relationship between a user and their comments
// and a post and its comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };