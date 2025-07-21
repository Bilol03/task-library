import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { ReturnBorrowDto } from './dto/return-borrow.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BorrowService {
  private readonly logger = new Logger(BorrowService.name);
  constructor(private prisma: PrismaService) {}

  async borrowBook(dto: CreateBorrowDto) {
    const book = await this.prisma.book.findUnique({
      where: { id: dto.bookId },
    });
    const user = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });
    console.log(user, '\n', book);

    if (!book || !book.isAvailable) {
      throw new NotFoundException('Kitob mavjud emas yoki band.');
    }

    const borrow = await this.prisma.borrow.create({
      data: {
        userId: dto.userId,
        bookId: dto.bookId,
      },
    });

    await this.prisma.book.update({
      where: { id: dto.bookId },
      data: { isAvailable: false },
    });

    this.logger.log(
      `Kitob (ID: ${dto.bookId}) foydalanuvchiga (ID: ${dto.userId}) ijaraga berildi.`,
    );
    

    return borrow;
  }

  async returnBook(dto: ReturnBorrowDto) {
    const borrow = await this.prisma.borrow.findUnique({
      where: { id: dto.borrowId },
      include: { book: true },
    });

    if (!borrow || borrow.returnDate) {
      throw new NotFoundException(
        'Ijara topilmadi yoki allaqachon qaytarilgan.',
      );
    }

    await this.prisma.borrow.update({
      where: { id: dto.borrowId },
      data: { returnDate: new Date() },
    });

    await this.prisma.book.update({
      where: { id: borrow.bookId },
      data: { isAvailable: true },
    });
    this.logger.log(
      `Kitob (ID: ${borrow.bookId}) foydalanuvchi (ID: ${borrow.userId}) tomonidan qaytarildi.`,
    );
    return { message: 'Kitob qaytarildi' };
  }

  async getAllBorrowed() {
    return this.prisma.borrow.findMany({
      where: { returnDate: null },
      include: {
        user: true,
        book: true,
      },
    });
  }

  async getUserHistory(userId: number) {
    return this.prisma.borrow.findMany({
      where: { userId },
      include: {
        book: true,
      },
    });
  }
}
