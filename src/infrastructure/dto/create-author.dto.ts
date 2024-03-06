import { Author } from '../../domain/models/author';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAuthorDTO implements Author {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
