import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    return this.prismaService.book.create({ data: createBookDto });
  }

  findAll() {
    return this.prismaService.book.findMany();
  }

  findOne(id: number) {
    return this.prismaService.book.findUnique({ where: { id } });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prismaService.book.update({ where: { id }, data: updateBookDto });
  }

  remove(id: number) {
    return this.prismaService.book.delete({ where: { id } });
  }
}
