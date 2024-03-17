import { Module } from '@nestjs/common';
import { CreateAuthorUseCase } from './usecases/create-author.usecase';
import { PrismaAuthorRepositoryAdapter } from '../infrastructure/repositories/prisma.author.repository.adapter';
import { PrismaClient } from '@prisma/client';
import { CreateBookUseCase } from './usecases/create-book.usecase';
import { PrismaBookRepositoryAdapter } from '../infrastructure/repositories/prisma.book.repository.adapter';
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
      useClass: PrismaAuthorRepositoryAdapter,
    },
    {
      provide: 'BookRepository',
      useClass: PrismaBookRepositoryAdapter,
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
