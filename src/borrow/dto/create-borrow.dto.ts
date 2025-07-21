import { IsInt } from 'class-validator';

export class CreateBorrowDto {
  @IsInt()
  userId: number;

  @IsInt()
  bookId: number;
}
