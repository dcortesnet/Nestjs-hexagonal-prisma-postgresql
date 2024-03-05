import { Module } from '@nestjs/common';
import { AuthorController } from './controllers/author.controller';
import { BookController } from './controllers/book.controller';

@Module({
  imports: [],
  controllers: [AuthorController, BookController],
  providers: [],
  exports: [],
})
export class InfraestructureModule {}
