import { AuthorModel } from '../../../src/domain/models/author.model';

describe('AuthorModel', () => {
  it('should create an instance of AuthorModel', () => {
    const author: AuthorModel = {
      name: 'John Doe',
      age: 30,
    };

    expect(author).toBeDefined();
    expect(author.name).toEqual('John Doe');
    expect(author.age).toEqual(30);
  });
});