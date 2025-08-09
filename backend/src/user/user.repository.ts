import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from 'src/types/User';

@Injectable()
export class UserRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.databaseService.users.create({
      data: {
        username: createUserDto.username,
        password: createUserDto.password,
      },
    });

    return user;
  }

  async findUserByName(username: string) {
    const user = await this.databaseService.users.findFirst({
      where: { username },
    });
    return user;
  }
}
