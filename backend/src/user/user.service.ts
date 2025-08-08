import { Injectable } from '@nestjs/common';
import usersData from '../data/users.json';
import { User } from '../types/User';

@Injectable()
export class UserService {
  private users: User[] = usersData.users;

  getUser(): User {
    const user = this.users[1];
    //const desiredFilm = this.films.find((film) => film.id === id);

    //if (!desiredFilm) {
    //  throw new NotFoundException(`Film with id ${id} not found`);
    //}
    return user;
  }

  findUserByName(username: string): User | undefined {
    return this.users.find((user) => user.userName === username);
  }
}
