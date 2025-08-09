export type User = {
  id: number;
  password: string;
  userName: string;
  userFilmsId: number[];
  filmsYear: number;
  following: number;
  followers: number;
};

export type CreateUserDto = {
  username: string;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
};
