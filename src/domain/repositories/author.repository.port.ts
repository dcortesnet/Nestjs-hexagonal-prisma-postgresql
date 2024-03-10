import { Author } from '../models/author';

export interface AuthorRepositoryPort {
  createAuthor(author: Author): Promise<Author>;
  findAuthorById(authorId: number): Promise<Author>;
}
