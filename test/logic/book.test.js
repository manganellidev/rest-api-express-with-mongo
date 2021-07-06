const Book = require('../../src/logic/book/book');

const bookValues = {
  title: 'Harry Potter',
  isbn: '978-85-333-0400-5',
  numberOfPages: 343,
  authors: ['Jarbas José', 'Maria Hub'],
  publisher: 'Alvorada',
  synopsis: 'Great for kids.',
  publishingDate: '20/01/2000',
};

describe('Book class invariants', () => {
  it('should create', () => {
    const bookExpected = new Book(bookValues);
    const harryPotter = new Book(bookValues);
    expect(harryPotter).toStrictEqual(bookExpected);
  });
});
