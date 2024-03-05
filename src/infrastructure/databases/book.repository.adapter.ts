import { Injectable } from '@nestjs/common';
import { Book } from 'src/domain/models/book';
import { BookRepositoryPort } from 'src/domain/repositories/book.repository.port';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookRepositoryAdapter implements BookRepositoryPort {
  constructor(private prisma: PrismaClient) {}

  async createBook(book: Book): Promise<Book> {
    return await this.prisma.book.create({
      data: {
        isbn: book.isbn,
        name: book.name,
        cantPages: book.cantPages,
        authorId: book.authorId,
      },
    });
  }

  async findyBookById(bookId: number): Promise<Book> {
    return await this.prisma.book.findUnique({
      where: { id: bookId },
    });
  }
}
