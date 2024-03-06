import { Book } from '../../domain/models/book';

export class CreateBookDTO implements Book {
  isbn: string;
  name: string;
  cantPages: number;
  authorId: number;
}
