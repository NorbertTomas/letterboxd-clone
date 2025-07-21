import './UserInfo.css';
import type { User } from '../../../backend/src/types/User';

type Props = {
  user: User;
};

export function UserInfo({ user }: Props) {
  return (
    <div className="user-info">
      <a className="user-name">{user.userName}</a>
      <a className="user-films">{user.userFilmsId}</a>
      <a className="user-filmsYear">{user.filmsYear}</a>
      <a className="user-followers">{user.followers}</a>
      <a className="user-following">{user.following}</a>
    </div>
  );
}