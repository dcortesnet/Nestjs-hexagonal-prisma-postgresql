import { Test, TestingModule } from '@nestjs/testing';
import { CreateAuthorUseCase } from '../../../src/application/usecases/create-author.usecase';
import { AuthorRepositoryPort } from '../../../src/domain/repositories/author.repository.port';
import { AuthorModel } from '../../../src/domain/models/author.model';

describe('CreateAuthorUseCase', () => {
  let createAuthorUseCase: CreateAuthorUseCase;
  let authorRepository: AuthorRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAuthorUseCase,
        {
          provide: 'AuthorRepository',
          useValue: {
            createAuthor: jest.fn(),
          },
        },
      ],
    }).compile();

    createAuthorUseCase = module.get<CreateAuthorUseCase>(CreateAuthorUseCase);
    authorRepository = module.get<AuthorRepositoryPort>('AuthorRepository');
  });

  describe('execute', () => {
    it('should create a new author', async () => {
      const author: AuthorModel = {
        id: 1,
        name: 'John Doe',
        age: 30,
      };

      const createdAuthor: AuthorModel = {
        id: 1,
        name: 'John Doe',
        age: 30,
      };

      (authorRepository.createAuthor as jest.Mock).mockResolvedValue(createdAuthor);
      const result = await createAuthorUseCase.execute(author);

      expect(authorRepository.createAuthor).toHaveBeenCalledWith(author);
      expect(result).toEqual(createdAuthor);
    });
  });
});