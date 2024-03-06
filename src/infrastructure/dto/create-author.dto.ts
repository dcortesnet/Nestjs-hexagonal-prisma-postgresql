import { Author } from '../../domain/models/author';

export class CreateAuthorDTO implements Author {
  name: string;
  age: number;
}
