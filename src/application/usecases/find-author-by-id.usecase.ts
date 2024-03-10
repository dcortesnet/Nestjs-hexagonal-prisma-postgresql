import { Inject, Injectable } from '@nestjs/common';
import { AuthorRepositoryPort } from '../../domain/repositories/author.repository.port';
import { Author } from '../../domain/models/author';

@Injectable()
export class FindAuthorByIdUseCase {
  constructor(
    @Inject('AuthorRepository') private authorRepository: AuthorRepositoryPort,
  ) {}

  async execute(authorId: number): Promise<Author> {
    const author = await this.authorRepository.findAuthorById(authorId);
    return author;
  }
}
