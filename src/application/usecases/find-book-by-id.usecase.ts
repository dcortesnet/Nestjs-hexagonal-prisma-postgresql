import { Inject, Injectable } from '@nestjs/common';
import { BookRepositoryPort } from '../../domain/repositories/book.repository.port';
import { Book } from '../../domain/models/book';

@Injectable()
export class FindBookByIdUseCase {
  constructor(
    @Inject('BookRepository') private bookRepository: BookRepositoryPort,
  ) {}

  async execute(bookId: number): Promise<Book> {
    const book = await this.bookRepository.findBookById(bookId);
    return book;
  }
}
