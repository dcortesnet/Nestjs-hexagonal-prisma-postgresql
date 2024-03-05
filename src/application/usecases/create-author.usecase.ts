import { Inject, Injectable } from '@nestjs/common';
import { Author } from '../../domain/models/author';
import { AuthorRepositoryPort } from '../../domain/repositories/author.repository.port';

@Injectable()
export class CreateAuthorUseCase {
  constructor(
    @Inject('AuthorRepository') private authorRepository: AuthorRepositoryPort,
  ) {}

  async execute(author: Author): Promise<Author> {
    const createdAuthor = await this.authorRepository.createAuthor(author);
    return createdAuthor;
  }
}
