import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { BorrowModule } from './borrow/borrow.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    BookModule,
    BorrowModule,
  ],
})
export class AppModule {}
