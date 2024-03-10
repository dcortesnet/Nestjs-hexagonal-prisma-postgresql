import { Test, TestingModule } from '@nestjs/testing';
import { CreateBookUseCase } from '../../../src/application/usecases/create-book.usecase';
import { BookRepositoryPort } from '../../../src/domain/repositories/book.repository.port';
import { BookModel } from '../../../src/domain/models/book.model';

describe('CreateBookUseCase', () => {
  let createBookUseCase: CreateBookUseCase;
  let bookRepository: BookRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateBookUseCase,
        {
          provide: 'BookRepository',
          useValue: {
            createBook: jest.fn(),
          },
        },
      ],
    }).compile();

    createBookUseCase = module.get<CreateBookUseCase>(CreateBookUseCase);
    bookRepository = module.get<BookRepositoryPort>('BookRepository');
  });

  describe('execute', () => {
    it('should create a new book', async () => {
      const book: BookModel = {
        isbn: '1234567890',
        name: 'Sample Book',
        authorId: 1,
        cantPages: 100,
      };

      const createdBook: BookModel = {
        id: 1,
        isbn: '1234567890',
        name: 'Sample Book',
        authorId: 1,
        cantPages: 100,
        createdAt: new Date(),
      };

      (bookRepository.createBook as jest.Mock).mockResolvedValue(createdBook);
      const result = await createBookUseCase.execute(book);

      expect(bookRepository.createBook).toHaveBeenCalledWith(book);
      expect(result).toEqual(createdBook);
    });
  });
});