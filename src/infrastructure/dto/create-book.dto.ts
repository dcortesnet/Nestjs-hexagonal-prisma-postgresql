import { Book } from '../../domain/models/book';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDTO implements Book {
  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  cantPages: number;

  @IsNumber()
  @IsNotEmpty()
  authorId: number;
}
