import { Test, TestingModule } from '@nestjs/testing';
import { FindAuthorByIdUseCase } from '../../../src/application/usecases/find-author-by-id.usecase';
import { AuthorRepositoryPort } from '../../../src/domain/repositories/author.repository.port';
import { AuthorModel } from '../../../src/domain/models/author.model';

describe('FindAuthorByIdUseCase', () => {
  let findAuthorByIdUseCase: FindAuthorByIdUseCase;
  let authorRepository: AuthorRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAuthorByIdUseCase,
        {
          provide: 'AuthorRepository',
          useValue: {
            findAuthorById: jest.fn(),
          },
        },
      ],
    }).compile();

    findAuthorByIdUseCase = module.get<FindAuthorByIdUseCase>(FindAuthorByIdUseCase);
    authorRepository = module.get<AuthorRepositoryPort>('AuthorRepository');
  });

  describe('execute', () => {
    it('should find an author by id', async () => {
      const authorId = 1;
      const author: AuthorModel = {
        id: authorId,
        name: 'John Doe',
        age: 30,
      };

      (authorRepository.findAuthorById as jest.Mock).mockResolvedValue(author);
      const result = await findAuthorByIdUseCase.execute(authorId);

      expect(authorRepository.findAuthorById).toHaveBeenCalledWith(authorId);
      expect(result).toEqual(author);
    });
  });
});