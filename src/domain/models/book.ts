export interface Book {
  id: number;
  isbn: string;
  name: string;
  cantPages: number;
  createdAt: Date;
  authorId: number;
}
