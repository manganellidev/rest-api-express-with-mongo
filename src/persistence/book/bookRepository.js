/* eslint-disable radix */
const mongoose = require('mongoose');
const BookModel = require('./bookModel');

async function findWithPagination(queryPage, queryLimit) {
  const page = parseInt(queryPage);
  const limit = parseInt(queryLimit);
  const skipIndex = (page - 1) * limit;
  const books = {};

  books.results = await BookModel.find()
    .sort({ _id: 1 })
    .limit(limit)
    .skip(skipIndex)
    .exec();
  return books.results;
}

module.exports = {
  async save(book) {
    return new BookModel(book).save();
  },
  async find(req) {
    if (req.query.page && req.query.limit) {
      return findWithPagination(req.query.page, req.query.limit);
    }
    return BookModel.find().sort({ _id: 1 }).exec();
  },
  async findById(id) {
    return BookModel.findById(id).catch((err) => (err instanceof mongoose.Error.CastError ? '' : err));
  },
  async update(foundBook, bookToBeUpdated) {
    foundBook.overwrite(bookToBeUpdated);
    const updatedBook = await foundBook.save();
    return updatedBook;
  },
  async delete(bookToBeDeleted) {
    return bookToBeDeleted.remove();
  },
};
