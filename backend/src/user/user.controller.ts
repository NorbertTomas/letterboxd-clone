import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/types/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): User {
    return this.userService.getUser();
  }
}
