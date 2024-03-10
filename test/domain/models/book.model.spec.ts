import { BookModel } from '../../../src/domain/models/book.model';

describe('BookModel', () => {
  it('should create a book model', () => {
    const book: BookModel = {
      id: 1,
      isbn: '978-3-16-148410-0',
      name: 'Sample Book',
      cantPages: 200,
      createdAt: new Date(),
      authorId: 1,
    };

    expect(book.id).toBe(1);
    expect(book.isbn).toBe('978-3-16-148410-0');
    expect(book.name).toBe('Sample Book');
    expect(book.cantPages).toBe(200);
    expect(book.createdAt).toBeInstanceOf(Date);
    expect(book.authorId).toBe(1);
  });
});