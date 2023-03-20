const mongoose = require('mongoose');

// TODO: Add a comment describing the functionality of the code below
//Create a new instance of the Mongoose schema to define shape of each document
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
//Using mongoose.mode() to compile a model based on the schema
//Book is the name of the model
//bookSchema is the name of the schema we are using to create a new instance of the model
const Book = mongoose.model('Book', bookSchema);

const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
//We use the model to create individual documents taht have the properties as defined in our schema
Book.create(
  {
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
//These can be added but not forced to follow the rules laid out above
Book.create(
  { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
//it creates it by just the title rather than title and 
Book.create({ title: 'Harold and the Purple Crayon' }, (err) =>
  err ? handleError(err) : console.log('Created new document')
);

module.exports = Book;
