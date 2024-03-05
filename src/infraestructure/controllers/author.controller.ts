import { Controller } from '@nestjs/common';
import { CreateAuthorUseCase } from 'src/application/usecases/create-author.usecase';
import { FindAuthorByIdUseCase } from 'src/application/usecases/find-author-by-id.usecase';

@Controller()
export class AuthorController {
  constructor() {}
}
