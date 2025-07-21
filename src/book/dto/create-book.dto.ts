import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @ApiProperty({example: 'title'})
  title: string;

  @IsString()
  @ApiProperty({example: 'author'})
  author: string;

  @IsInt()
  @ApiProperty({example: '1999'})
  publishedYear: number;

  @IsString()
  @ApiProperty({example: 'fantastic'})
  genre: string;

  @IsBoolean()
  @ApiProperty({example: false})
  isAvailable: boolean;
}
