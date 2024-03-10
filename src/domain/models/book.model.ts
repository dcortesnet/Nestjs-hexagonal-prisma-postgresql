export interface BookModel {
  id?: number;
  isbn: string;
  name: string;
  cantPages: number;
  createdAt?: Date;
  authorId: number;
}
