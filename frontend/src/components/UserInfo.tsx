import './UserInfo.css';
import type { User } from '../../../backend/src/types/User';
import avatar from '../assets/avatar.jpg'

type Props = {
  user: User;
};

export function UserInfo({ user }: Props) {
  return (
    <div className='profile-summary'>
      <img src={avatar} alt='user' className='profile-avatar'></img>
      <div className='profile-name-actions'>
        <a className="user-name">{user.userName}</a>
        <button className='edit-profile'>EDIT PROFILE</button>
        <button className='profile-actions'>...</button>
      </div>
      <div className="profile-stats">
        <a className="user-films">{user.userFilmsId} Films</a>
        <a className="user-filmsYear">{user.filmsYear} This Year</a>
        <a className="user-followers">{user.following} Following</a>
        <a className="user-following">{user.followers} Followers</a>
      </div>
    </div>
  );
}
/*
<a href="/acuuustic/films/"><span class="value">578</span><span class="definition">Films</span></a>
*/