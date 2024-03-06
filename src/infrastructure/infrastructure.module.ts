import { Module } from '@nestjs/common';
import { AuthorController } from './controllers/author.controller';
import { BookController } from './controllers/book.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [AuthorController, BookController],
  providers: [],
  exports: [],
})
export class InfrastructureModule {}
