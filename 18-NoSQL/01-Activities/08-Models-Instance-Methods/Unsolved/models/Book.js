const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true},
    price: Number,
})
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function (discountPercentage) {
    const discountAmount = (this.price * discountPercentage) / 100; 
    return this.price = discountAmount;
};

// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const myBook = new Book ({
    title: 'Much Ado About Nothing',
    author: 'William Shakespeare',
    price: 10.99,
});

// TODO: Call the custom instance method on the instance
console.log(myBook.getDiscount(50));


module.exports = Book;
