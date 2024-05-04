import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './User/user.service';
import { UserController } from './User/user.controller';

@Module({
  imports: [PrismaModule ],
  controllers: [AppController, ProductsController, UserController],
  providers: [ ProductsService, UserService],
})
export class AppModule {}
