import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsInt()
  publishedYear: number;

  @IsString()
  genre: string;

  @IsBoolean()
  isAvailable: boolean;
}
