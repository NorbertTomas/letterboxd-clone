import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, User } from 'src/types/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): User {
    return this.userService.getUser();
  }

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
