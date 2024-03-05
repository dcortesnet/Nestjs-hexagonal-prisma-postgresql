import { Author } from '../models/author';

export interface AuthorRepositoryPort {
  createAuthor(author: Author): Promise<Author>;
  findyAuthorById(authorId: number): Promise<Author>;
}
