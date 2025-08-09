import { Injectable } from '@nestjs/common';
import usersData from '../../data/users.json';
import { CreateUserDto, User } from '../types/User';
import { encodePassword } from 'src/utils/bcrypt';
import { UserRepository } from './user.repository';
import { users } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  private users: User[] = usersData.users;

  getUser(): User {
    const user = this.users[1];
    //const desiredFilm = this.films.find((film) => film.id === id);

    //if (!desiredFilm) {
    //  throw new NotFoundException(`Film with id ${id} not found`);
    //}
    return user;
  }

  async findUserByName(username: string): Promise<users | null> {
    return await this.userRepository.findUserByName(username);
  }

  async createUser(createUserDto: CreateUserDto) {
    const password = await encodePassword(createUserDto.password);

    const newUser = this.userRepository.create({ ...createUserDto, password });

    return newUser;
  }
}
