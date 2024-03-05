import { Controller } from '@nestjs/common';
import { CreateBookUseCase } from 'src/application/usecases/create-book.usecase';
import { FindBookByIdUseCase } from 'src/application/usecases/find-book-by-id.usecase';

@Controller()
export class BookController {
  constructor() {}
}
