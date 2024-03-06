import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateAuthorUseCase } from '../../application/usecases/create-author.usecase';
import { FindAuthorByIdUseCase } from '../../application/usecases/find-author-by-id.usecase';
import { CreateAuthorDTO } from '../dto/create-author.dto';

@Controller('authors/')
export class AuthorController {
  constructor(
    private createAuthorUseCase: CreateAuthorUseCase,
    private findAuthorByIdUseCase: FindAuthorByIdUseCase,
  ) {}

  @Post()
  async createAuthor(
    @Res() request,
    @Body() author: CreateAuthorDTO,
  ): Promise<any> {
    const authorCreated = await this.createAuthorUseCase.execute(author);
    return request.status(HttpStatus.CREATED).json(authorCreated);
  }

  @Get(':id')
  async findAuthorById(@Res() request, @Param('id') id: number): Promise<any> {
    const author = await this.findAuthorByIdUseCase.execute(id);
    return request.status(HttpStatus.OK).json(author);
  }
}
