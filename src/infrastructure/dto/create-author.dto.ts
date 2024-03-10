import { AuthorModel } from '../../domain/models/author.model';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAuthorDTO implements AuthorModel {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
