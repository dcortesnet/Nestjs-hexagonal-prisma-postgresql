import { CreateAuthorDTO } from '../../../src/infrastructure/dto/create-author.dto';

describe('CreateAuthorDTO', () => {
  let createAuthorDTO: CreateAuthorDTO;

  beforeEach(() => {
    createAuthorDTO = new CreateAuthorDTO();
  });

  it('should be defined', () => {
    expect(createAuthorDTO).toBeDefined();
  });

  it('should have a name property', () => {
    createAuthorDTO.name = 'John Doe';
    expect(createAuthorDTO.name).toEqual('John Doe');
  });

  it('should have an age property', () => {
    createAuthorDTO.age = 30;
    expect(createAuthorDTO.age).toEqual(30);
  });
});