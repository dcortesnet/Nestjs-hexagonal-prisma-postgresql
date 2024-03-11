import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { AuthorRepositoryAdapter } from '../../../src/infrastructure/repositories/author.repository.adapter';
import { AuthorModel } from '../../../src/domain/models/author.model';

describe('AuthorRepositoryAdapter', () => {
  let repository: AuthorRepositoryAdapter;
  let prismaClient: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorRepositoryAdapter,
        {
          provide: PrismaClient,
          useValue: {
            author: {
              create: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    repository = module.get<AuthorRepositoryAdapter>(AuthorRepositoryAdapter);
    prismaClient = module.get<PrismaClient>(PrismaClient);
  });

  describe('createAuthor', () => {
    it('should create a new author', async () => {
      const author: AuthorModel = {
        name: 'Diego',
        age: 25,
      };

      const createdAuthor: AuthorModel = {
        id: 1,
        name: 'Diego',
        age: 25,
      };

      (prismaClient.author.create as jest.Mock).mockResolvedValue(createdAuthor);

      const result = await repository.createAuthor(author);

      expect(prismaClient.author.create).toHaveBeenCalledWith({
        data: {
          name: author.name,
          age: author.age,
        },
      });
      expect(result).toEqual(createdAuthor);
    });
  });

  describe('findAuthorById', () => {
    it('should find an author by ID', async () => {
      const authorId = 1;

      const author: AuthorModel = {
        id: 1,
        name: 'Diego',
        age: 25,
        createdAt: new Date(),
      };

      (prismaClient.author.findUnique as jest.Mock).mockResolvedValue(author);

      const result = await repository.findAuthorById(authorId);

      expect(prismaClient.author.findUnique).toHaveBeenCalledWith({
        where: { id: authorId },
      });
      expect(result).toEqual(author);
    });
  });
});