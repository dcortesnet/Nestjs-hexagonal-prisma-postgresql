import { Injectable } from '@nestjs/common';
import { BookModel } from '../../domain/models/book.model';
import { BookRepositoryPort } from '../../domain/repositories/book.repository.port';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookRepositoryAdapter implements BookRepositoryPort {
  constructor(private prisma: PrismaClient) {}

  async createBook(book: BookModel): Promise<BookModel> {
    return await this.prisma.book.create({
      data: {
        isbn: book.isbn,
        name: book.name,
        cantPages: book.cantPages,
        authorId: book.authorId,
      },
    });
  }

  async findBookById(bookId: number): Promise<BookModel> {
    return await this.prisma.book.findUnique({
      where: { id: bookId },
    });
  }
}
