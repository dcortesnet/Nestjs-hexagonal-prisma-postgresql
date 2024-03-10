import { AuthorModel } from '../models/author.model';

export interface AuthorRepositoryPort {
  createAuthor(author: AuthorModel): Promise<AuthorModel>;
  findAuthorById(authorId: number): Promise<AuthorModel>;
}
