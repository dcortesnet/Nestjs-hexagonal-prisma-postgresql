import { Module } from '@nestjs/common';
import { CreateAuthorUseCase } from './usecases/create-author.usecase';
import { AuthorRepositoryAdapter } from '../infrastructure/databases/author.repository.adapter';
import { PrismaClient } from '@prisma/client';
import { CreateBookUseCase } from './usecases/create-book.usecase';
import { BookRepositoryAdapter } from '../infrastructure/databases/book.repository.adapter';
import { FindAuthorByIdUseCase } from './usecases/find-author-by-id.usecase';
import { FindBookByIdUseCase } from './usecases/find-book-by-id.usecase';

@Module({
  imports: [],
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    CreateAuthorUseCase,
    CreateBookUseCase,
    FindAuthorByIdUseCase,
    FindBookByIdUseCase,
    {
      provide: 'AuthorRepository',
      useClass: AuthorRepositoryAdapter,
    },
    {
      provide: 'BookRepository',
      useClass: BookRepositoryAdapter,
    },
  ],
  exports: [
    CreateAuthorUseCase,
    CreateBookUseCase,
    FindAuthorByIdUseCase,
    FindBookByIdUseCase,
  ],
})
export class ApplicationModule {}
