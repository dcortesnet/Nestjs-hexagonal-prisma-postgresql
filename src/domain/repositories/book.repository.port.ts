import { Book } from '../models/book';

export interface BookRepositoryPort {
  createBook(book: Book): Promise<Book>;
  findyBookById(bookId: number): Promise<Book>;
}
