import { Injectable } from '@nestjs/common';
import { Book } from 'src/domain/models/book';
import { BookRepositoryPort } from 'src/domain/repositories/book.repository.port';

@Injectable()
export class PrismaBookRepositoryAdapater implements BookRepositoryPort {
  createAuthor(book: Book): Promise<Book> {
    throw new Error('Method not implemented.');
  }
  findyAuthorById(bookId: number): Promise<Book> {
    throw new Error('Method not implemented.');
  }
}
