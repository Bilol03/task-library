import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateBorrowDto {
  @IsInt()
  @ApiProperty({example: 1})
  userId: number;

  @IsInt()
  @ApiProperty({example: 3})
  bookId: number;
  
}
