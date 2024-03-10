import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { CreateAuthorUseCase } from '../../application/usecases/create-author.usecase';
import { FindAuthorByIdUseCase } from '../../application/usecases/find-author-by-id.usecase';
import { CreateAuthorDTO } from '../dto/create-author.dto';

describe('AuthorController', () => {
  let controller: AuthorController;
  let createAuthorUseCase: CreateAuthorUseCase;
  let findAuthorByIdUseCase: FindAuthorByIdUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [
        {
          provide: CreateAuthorUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: FindAuthorByIdUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthorController>(AuthorController);
    createAuthorUseCase = module.get<CreateAuthorUseCase>(CreateAuthorUseCase);
    findAuthorByIdUseCase = module.get<FindAuthorByIdUseCase>(FindAuthorByIdUseCase);
  });

  describe('createAuthor', () => {
    it('should create a new author and return the created author', async () => {
      const author: CreateAuthorDTO = {
        name: 'Diego',
        age: 25
      };

      const createdAuthor = {
        id: 1,
        name: 'Diego',
        age: 25,
        createdAt: '2021-10-10T00:00:00Z'
      };

    createAuthorUseCase.execute = jest.fn().mockResolvedValue(createdAuthor);

    const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    await controller.createAuthor(response, author);

    expect(createAuthorUseCase.execute).toHaveBeenCalledWith(author);
    expect(response.status).toHaveBeenCalledWith(HttpStatus.CREATED);
    expect(response.json).toHaveBeenCalledWith(createdAuthor);
    });
    });

    describe('findAuthorById', () => {
    it('should find an author by ID and return the author', async () => {
        const id = 1;
        const author = {
            id: 1,
            name: 'Diego',
            age: 25,
            createdAt: '2021-10-10T00:00:00Z'
        };

        findAuthorByIdUseCase.execute = jest.fn().mockResolvedValue(author);

        const response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await controller.findAuthorById(response, id);

        expect(findAuthorByIdUseCase.execute).toHaveBeenCalledWith(id);
        expect(response.status).toHaveBeenCalledWith(HttpStatus.OK);
        expect(response.json).toHaveBeenCalledWith(author);
    });
    });
});