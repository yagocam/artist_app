import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: Prisma.UserCreateInput): Promise<User> {
    return this.userService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<User>): Promise<User> {
    return this.userService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.userService.delete(+id);
  }
}
