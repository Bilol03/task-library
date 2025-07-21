import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { ReturnBorrowDto } from './dto/return-borrow.dto';

@Controller()
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post('borrow')
  borrowBook(@Body() dto: CreateBorrowDto) {
    return this.borrowService.borrowBook(dto);
  }

  @Post('return')
  returnBook(@Body() dto: ReturnBorrowDto) {
    return this.borrowService.returnBook(dto);
  }

  @Get('borrowed')
  getAllBorrowed() {
    return this.borrowService.getAllBorrowed();
  }

  @Get('users/:id/history')
  getUserHistory(@Param('id') id: string) {
    return this.borrowService.getUserHistory(+id);
  }
}
