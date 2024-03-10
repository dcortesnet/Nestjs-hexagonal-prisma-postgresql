import { BookModel } from '../../domain/models/book.model';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDTO implements BookModel {
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
