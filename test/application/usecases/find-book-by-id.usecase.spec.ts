import { Test, TestingModule } from '@nestjs/testing';
import { FindBookByIdUseCase } from '../../../src/application/usecases/find-book-by-id.usecase';
import { BookRepositoryPort } from '../../../src/domain/repositories/book.repository.port';
import { Book } from '../../../src/domain/models/book';

describe('FindBookByIdUseCase', () => {
  let findBookByIdUseCase: FindBookByIdUseCase;
  let bookRepository: BookRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindBookByIdUseCase,
        {
          provide: 'BookRepository',
          useValue: {
            findBookById: jest.fn(),
          },
        },
      ],
    }).compile();

    findBookByIdUseCase = module.get<FindBookByIdUseCase>(FindBookByIdUseCase);
    bookRepository = module.get<BookRepositoryPort>('BookRepository');
  });

  describe('execute', () => {
    it('should find a book by id', async () => {
      const bookId = 1;
      const book: Book = {
        id: 1,
        name: 'Sample Book',
        authorId: 1,
        cantPages: 100,
        isbn: '1234567890',
        createdAt: new Date(),
      };

      (bookRepository.findBookById as jest.Mock).mockResolvedValue(book);
      const result = await findBookByIdUseCase.execute(bookId);

      expect(bookRepository.findBookById).toHaveBeenCalledWith(bookId);
      expect(result).toEqual(book);
    });
  });
});