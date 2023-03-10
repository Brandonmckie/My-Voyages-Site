const path = require('path');
const { Post } = require('../models');
const fetch = require('node-fetch');
const FormData = require('form-data');
const http = require('http');
// ! SEEDS ARE BROKEN DO NOT USE!!!!
const postdata = [
  {
    title: "Charlotte: The Queen City",
    content: "Buzz around the best of what Charlotte has to offer with this adventure package",
    images: `${path.join(__dirname, 'img', 'blog-img', 'blog-seeds', 'Charlotte.jpg}')}`,
    city: "Charlotte",
    user_id: 1,
    category_id: "Stay"
  }
];

// takes all objects of post data in postdata array and inserts each into Post model in db
const seedPosts = () => Post.bulkCreate(postdata);
// const seedPosts = () => {
//   postdata.forEach(async post => {
//     var form_data = new FormData();
//     for ( var key in post ) {
//       form_data.append(key, post[key]);
//     }
//     console.log(form_data)
//     const res = await fetch('/api/posts', {method: 'POST', body: form_data });
//     console.log(res);
//   });
// };
// module.exports = seedPosts;
module.exports = seedPosts;