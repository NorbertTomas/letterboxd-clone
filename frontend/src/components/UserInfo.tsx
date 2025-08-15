import './UserInfo.css';
import avatar from '../assets/avatar.jpg'
import { type User } from '../authContextInstance';

export function UserInfo({ user }: { user: User })  {
  return (
    <div className='profile-summary'>
      <img src={avatar} alt='user' className='profile-avatar'></img>
      <div className='profile-name-actions'>
        <a className="user-name">{user.username}</a>
        <button className='edit-profile'>EDIT PROFILE</button>
        <button className='profile-actions'>...</button>
      </div>
      <div className="profile-stats">
        <a className="user-films">10 Films</a>
        <a className="user-filmsYear">10 This Year</a>
        <a className="user-followers">10 Following</a>
        <a className="user-following">10 Followers</a>
      </div>
    </div>
  );
}
/*
<a href="/acuuustic/films/"><span class="value">578</span><span class="definition">Films</span></a>
*/