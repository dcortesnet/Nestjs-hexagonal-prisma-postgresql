import { Inject, Injectable } from '@nestjs/common';
import { AuthorModel } from '../../domain/models/author.model';
import { AuthorRepositoryPort } from '../../domain/repositories/author.repository.port';

@Injectable()
export class CreateAuthorUseCase {
  constructor(
    @Inject('AuthorRepository') private authorRepository: AuthorRepositoryPort,
  ) {}

  async execute(author: AuthorModel): Promise<AuthorModel> {
    const createdAuthor = await this.authorRepository.createAuthor(author);
    return createdAuthor;
  }
}
