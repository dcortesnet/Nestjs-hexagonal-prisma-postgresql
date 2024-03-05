import { Injectable } from '@nestjs/common';
import { AuthorRepositoryPort } from '../../domain/repositories/author.repository.port';
import { Author } from '../../domain/models/author';

@Injectable()
export class PrismaAuthorRepositoryAdapter implements AuthorRepositoryPort {
  createAuthor(author: Author): Promise<Author> {
    throw new Error('Method not implemented.');
  }
  findyAuthorById(authorId: number): Promise<Author> {
    throw new Error('Method not implemented.');
  }
}
