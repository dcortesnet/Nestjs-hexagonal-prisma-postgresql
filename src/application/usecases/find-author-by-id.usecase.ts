import { Inject, Injectable } from '@nestjs/common';
import { AuthorRepositoryPort } from '../../domain/repositories/author.repository.port';
import { AuthorModel } from '../../domain/models/author.model';

@Injectable()
export class FindAuthorByIdUseCase {
  constructor(
    @Inject('AuthorRepository') private authorRepository: AuthorRepositoryPort,
  ) {}

  async execute(authorId: number): Promise<AuthorModel> {
    const author = await this.authorRepository.findAuthorById(authorId);
    return author;
  }
}
