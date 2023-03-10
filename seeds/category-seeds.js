const { Category } = require('../models');
// ! SEEDS ARE BROKEN DO NOT USE!!!!
// Each object containing properties can be seen as a row
// and the array as a table wrapping the rows. Each property
// being the columns of this table.

// All of these rows contain a category name and will be automatically
// be assigned a unique ID via SQL as the category's primary key 
// This will be utilized by product objects to be associated with 
// a category via foreign key
const categoryData = [
  {
    category_name: 'Stay',
  },
  {
    category_name: 'Taste',
  },
  {
    category_name: 'Vibe',
  }
];

// inserts multiple rows of categories into the Category table in the database
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
