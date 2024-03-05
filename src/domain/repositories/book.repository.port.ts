import { Book } from '../models/book';

export interface BookRepositoryPort {
  createAuthor(book: Book): Promise<Book>;
  findyAuthorById(bookId: number): Promise<Book>;
}
