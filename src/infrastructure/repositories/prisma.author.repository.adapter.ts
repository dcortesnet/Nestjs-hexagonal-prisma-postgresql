import { Injectable } from '@nestjs/common';
import { AuthorRepositoryPort } from '../../domain/repositories/author.repository.port';
import { AuthorModel } from '../../domain/models/author.model';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaAuthorRepositoryAdapter implements AuthorRepositoryPort {
  constructor(private prisma: PrismaClient) {}

  async createAuthor(author: AuthorModel): Promise<AuthorModel> {
    return await this.prisma.author.create({
      data: {
        name: author.name,
        age: author.age,
      },
    });
  }

  async findAuthorById(authorId: number): Promise<AuthorModel> {
    return await this.prisma.author.findUnique({
      where: { id: authorId },
    });
  }
}
