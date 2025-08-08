export type User = {
  id: number;
  password: string;
  userName: string;
  userFilmsId: number[];
  filmsYear: number;
  following: number;
  followers: number;
};
