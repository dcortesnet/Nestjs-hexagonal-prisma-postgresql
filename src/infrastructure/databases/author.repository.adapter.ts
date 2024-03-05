import { Injectable } from '@nestjs/common';
import { AuthorRepositoryPort } from '../../domain/repositories/author.repository.port';
import { Author } from '../../domain/models/author';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthorRepositoryAdapter implements AuthorRepositoryPort {
  constructor(private prisma: PrismaClient) {}

  async createAuthor(author: Author): Promise<Author> {
    return await this.prisma.author.create({
      data: {
        name: author.name,
        age: author.age,
      },
    });
  }

  async findyAuthorById(authorId: number): Promise<Author> {
    return await this.prisma.author.findUnique({
      where: { id: authorId },
    });
  }
}
