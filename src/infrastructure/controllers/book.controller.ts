import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateBookUseCase } from '../../application/usecases/create-book.usecase';
import { FindBookByIdUseCase } from '../../application/usecases/find-book-by-id.usecase';
import { CreateBookDTO } from '../dto/create-book.dto';

@Controller()
export class BookController {
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private findBookByIdUseCase: FindBookByIdUseCase,
  ) {}

  @Post()
  async createBook(@Res() request, @Body() book: CreateBookDTO): Promise<any> {
    const bookCreated = await this.createBookUseCase.execute(book);
    return request.status(HttpStatus.CREATED).json(bookCreated);
  }

  @Get(':id')
  async findBookById(@Res() request, @Param('id') id: number): Promise<any> {
    const book = await this.findBookByIdUseCase.execute(id);
    return request.status(HttpStatus.OK).json(book);
  }
}
