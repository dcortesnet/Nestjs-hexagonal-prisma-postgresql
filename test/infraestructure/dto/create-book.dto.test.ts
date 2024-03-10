import { CreateBookDTO } from '../../../src/infrastructure/dto/create-book.dto';

describe('CreateBookDTO', () => {
  let createBookDTO: CreateBookDTO;

  beforeEach(() => {
    createBookDTO = new CreateBookDTO();
  });

  it('should be defined', () => {
    expect(createBookDTO).toBeDefined();
  });

  it('should have a valid ISBN', () => {
    createBookDTO.isbn = '1234567890';
    expect(createBookDTO.isbn).toBe('1234567890');
  });

  it('should have a valid name', () => {
    createBookDTO.name = 'Sample Book';
    expect(createBookDTO.name).toBe('Sample Book');
  });

  it('should have a valid number of pages', () => {
    createBookDTO.cantPages = 100;
    expect(createBookDTO.cantPages).toBe(100);
  });

  it('should have a valid author ID', () => {
    createBookDTO.authorId = 1;
    expect(createBookDTO.authorId).toBe(1);
  });
});