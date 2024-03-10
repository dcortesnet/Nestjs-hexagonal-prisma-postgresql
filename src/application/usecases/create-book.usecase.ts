import { Inject, Injectable } from '@nestjs/common';
import { BookModel } from '../../domain/models/book.model';
import { BookRepositoryPort } from '../../domain/repositories/book.repository.port';

@Injectable()
export class CreateBookUseCase {
  constructor(
    @Inject('BookRepository') private bookRepository: BookRepositoryPort,
  ) {}

  async execute(book: BookModel): Promise<BookModel> {
    const createdBook = await this.bookRepository.createBook(book);
    return createdBook;
  }
}
