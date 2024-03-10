import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { BookController } from './book.controller';
import { CreateBookUseCase } from '../../application/usecases/create-book.usecase';
import { FindBookByIdUseCase } from '../../application/usecases/find-book-by-id.usecase';
import { CreateBookDTO } from '../dto/create-book.dto';

describe('BookController', () => {
  let controller: BookController;
  let createBookUseCase: CreateBookUseCase;
  let findBookByIdUseCase: FindBookByIdUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        {
          provide: CreateBookUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: FindBookByIdUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
    createBookUseCase = module.get<CreateBookUseCase>(CreateBookUseCase);
    findBookByIdUseCase = module.get<FindBookByIdUseCase>(FindBookByIdUseCase);
  });

  describe('createBook', () => {
    it('should create a new book and return the created book', async () => {
      const book: CreateBookDTO = {
        isbn: '1234567890',
        name: 'Sample Book',
        authorId: 1,
        cantPages: 100
      };

      const createdBook = {
        id: 1,
        isbn: '1234567890',
        name: 'Sample Book',
        authorId: 1,
        cantPages: 100,
        createdAt: '2021-10-10T00:00:00Z',
      };

      createBookUseCase.execute = jest.fn().mockResolvedValue(createdBook);

      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.createBook(response, book);

      expect(createBookUseCase.execute).toHaveBeenCalledWith(book);
      expect(response.status).toHaveBeenCalledWith(HttpStatus.CREATED);
      expect(response.json).toHaveBeenCalledWith(createdBook);
    });
  });

  describe('findBookById', () => {
    it('should find a book by ID and return the book', async () => {
      const id = 1;
      const book = {
        id: 1,
        isbn: '1234567890',
        name: 'Sample Book',
        authorId: 1,
        cantPages: 100,
        createdAt: '2021-10-10T00:00:00Z',
      };

      findBookByIdUseCase.execute = jest.fn().mockResolvedValue(book);

      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.findBookById(response, id);

      expect(findBookByIdUseCase.execute).toHaveBeenCalledWith(id);
      expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
      expect(response.json).toHaveBeenCalledWith(book);
    });
  });
});