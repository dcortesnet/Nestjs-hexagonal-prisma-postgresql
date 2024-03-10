import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { BookRepositoryAdapter } from '../../../src/infrastructure/databases/book.repository.adapter';
import { BookModel } from '../../../src/domain/models/book.model';

describe('BookRepositoryAdapter', () => {
  let bookRepository: BookRepositoryAdapter;
  let prismaClient: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookRepositoryAdapter,
        {
          provide: PrismaClient,
          useValue: {
            book: {
              create: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    bookRepository = module.get<BookRepositoryAdapter>(BookRepositoryAdapter);
    prismaClient = module.get<PrismaClient>(PrismaClient);
  });

  describe('createBook', () => {
    it('should create a new book', async () => {
      const book: BookModel = {
        isbn: '1234567890',
        name: 'Sample Book',
        cantPages: 100,
        authorId: 1,
      };

      const createdBook: BookModel = {
        id: 1,
        isbn: '1234567890',
        name: 'Sample Book',
        cantPages: 100,
        authorId: 1,
      };

      (prismaClient.book.create as jest.Mock).mockResolvedValue(createdBook);
      const result = await bookRepository.createBook(book);

      expect(prismaClient.book.create).toHaveBeenCalledWith({
        data: {
          isbn: '1234567890',
          name: 'Sample Book',
          cantPages: 100,
          authorId: 1,
        },
      });
      expect(result).toEqual(createdBook);
    });
  });

  describe('findyBookById', () => {
    it('should find a book by ID', async () => {
      const bookId = 1;

      const foundBook: BookModel = {
        id: 1,
        isbn: '1234567890',
        name: 'Sample Book',
        cantPages: 100,
        authorId: 1,
      };

      (prismaClient.book.findUnique as jest.Mock).mockResolvedValue(foundBook);

      const result = await bookRepository.findBookById(bookId);

      expect(prismaClient.book.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(foundBook);
    });
  });
});