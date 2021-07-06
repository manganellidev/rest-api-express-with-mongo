module.exports = {
  create(body = {}) {
    return {
      title: body.title || '',
      isbn: body.isbn || '',
      numberOfPages: body.numberOfPages || '',
      authors: body.authors || '',
      publisher: body.publisher || '',
      synopsis: body.synopsis || '',
      publishingDate: body.publishingDate || '',
    };
  },
};
