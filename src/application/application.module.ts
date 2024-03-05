import { Module } from '@nestjs/common';
import { CreateAuthorUseCase } from './usecases/create-author.usecase';
import { AuthorRepositoryAdapter } from '../infraestructure/databases/author.repository.adapter';
import { PrismaClient } from '@prisma/client';
import { CreateBookUseCase } from './usecases/create-book.usecase';
import { BookRepositoryAdapter } from 'src/infraestructure/databases/book.repository.adapter';

@Module({
  imports: [],
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    CreateAuthorUseCase,
    CreateBookUseCase,
    {
      provide: 'AuthorRepository',
      useClass: AuthorRepositoryAdapter,
    },
    {
      provide: 'BookRepository',
      useClass: BookRepositoryAdapter,
    },
  ],
  exports: [],
})
export class ApplicationModule {}
