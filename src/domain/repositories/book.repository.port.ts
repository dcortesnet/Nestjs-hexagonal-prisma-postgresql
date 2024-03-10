import { Book } from '../models/book';

export interface BookRepositoryPort {
  createBook(book: Book): Promise<Book>;
  findBookById(bookId: number): Promise<Book>;
}
