import { Inject, Injectable } from '@nestjs/common';
import { BookRepositoryPort } from '../../domain/repositories/book.repository.port';
import { BookModel } from '../../domain/models/book.model';

@Injectable()
export class FindBookByIdUseCase {
  constructor(
    @Inject('BookRepository') private bookRepository: BookRepositoryPort,
  ) {}

  async execute(bookId: number): Promise<BookModel> {
    const book = await this.bookRepository.findBookById(bookId);
    return book;
  }
}
