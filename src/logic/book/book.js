const { title } = require('./title');
const { isbn } = require('./isbn');
const { numberOfPages } = require('./numberOfPages');
const { author } = require('./author');
const { publisher } = require('./publisher');
const { synopsis } = require('./synopsis');
const { publishingDate } = require('./publishingDate');

module.exports = class Book {
  constructor(dto) {
    this.title = title(dto.title);
    this.isbn = isbn(dto.isbn);
    this.numberOfPages = numberOfPages(dto.numberOfPages);
    this.authors = author(dto.authors);
    this.publisher = publisher(dto.publisher);
    this.synopsis = synopsis(dto.synopsis);
    this.publishingDate = publishingDate(dto.publishingDate);
  }
};
