import { BookModel } from '../models/book.model';

export interface BookRepositoryPort {
  createBook(book: BookModel): Promise<BookModel>;
  findBookById(bookId: number): Promise<BookModel>;
}
