/* eslint-disable no-underscore-dangle */
const maintainBookDto = require('./maintainBookDto');
const responseBookDto = require('./responseBookDto');
const responseBookInArrayDto = require('./responseBookInArrayDto');
const Book = require('../../logic/book/book');
const bookRepository = require('../../persistence/book/bookRepository');
const { ResourceNotFoundException } = require('../exception/exceptions');
const { resourceNotFound } = require('../exception/messages/errorDetailMessages');

async function fetchById(id, next) {
  const foundBook = await bookRepository.findById(id);
  if (foundBook) {
    return foundBook;
  }
  return next(new ResourceNotFoundException(resourceNotFound('book', id)));
}

module.exports = {
  async create(req, res, next) {
    try {
      const dto = maintainBookDto.create(req.body);
      const bookToBeSaved = new Book(dto);
      const savedBook = await bookRepository.save(bookToBeSaved);
      req.logger.info(`Book ${savedBook._id.toString()} has been created.`);
      res.status(201).json(responseBookDto.create(savedBook));
    } catch (e) {
      next(e);
    }
  },
  async find(req, res, next) {
    try {
      const foundBooks = await bookRepository.find(req);
      res.status(200).json(responseBookInArrayDto.create(foundBooks));
    } catch (e) {
      next(e);
    }
  },
  async findById(req, res, next) {
    try {
      const foundBook = await fetchById(req.params.id, next);
      if (foundBook) {
        res.status(200).json(responseBookDto.create(foundBook));
      }
    } catch (e) {
      next(e);
    }
  },
  async update(req, res, next) {
    try {
      const foundBook = await fetchById(req.params.id, next);
      if (foundBook) {
        const dto = maintainBookDto.create(req.body);
        const bookToBeUpdated = new Book(dto);
        const updatedBook = await bookRepository.update(foundBook, bookToBeUpdated);
        req.logger.info(`Book ${updatedBook._id.toString()} has been updated.`);
        res.status(200).json(responseBookDto.create(updatedBook));
      }
    } catch (e) {
      next(e);
    }
  },
  async delete(req, res, next) {
    try {
      const foundBookToBeDeleted = await fetchById(req.params.id, next);
      if (foundBookToBeDeleted) {
        await bookRepository.delete(foundBookToBeDeleted);
        req.logger.info(`Book ${foundBookToBeDeleted._id.toString()} has been deleted.`);
        res.status(200).send();
      }
    } catch (e) {
      next(e);
    }
  },
};
