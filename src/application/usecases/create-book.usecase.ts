import { Inject, Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { BookRepositoryPort } from 'src/domain/repositories/book.repository.port';

@Injectable()
export class CreateBookUseCase {
  constructor(
    @Inject('BookRepository') private bookRepository: BookRepositoryPort,
  ) {}

  async execute(book: Book): Promise<Book> {
    const createdBook = await this.bookRepository.createBook(book);
    return createdBook;
  }
}
