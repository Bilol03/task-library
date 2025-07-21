import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class ReturnBorrowDto {
  @IsInt()
  @ApiProperty({ example: 1 })
  borrowId: number;
}
