import letterboxdLogo from '../assets/letterboxdLogo.svg'
import avatar from '../assets/avatar.jpg'
import './Header.css'
import { ChevronDown, SearchIcon, ZapIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContextInstance';

export function Header() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const goToUserInfo = () => {
        navigate("/user");
    };

    const goToHome = () => {
        navigate("/");
    };

    return (
        <header className='header'>
            <div className='header-left'>
                <img src={letterboxdLogo} alt="logo" className='logo'/>
            </div>

            <nav className='nav'>
            {user ? (
                <div className='user-menu'>
                    <div className='dropdown-trigger'>
                        <img src={avatar} alt='user' className='avatar'></img>
                        <span className='username'> acuuustic</span>
                        <ChevronDown className="icon-sm" />
                    </div>
                    <div className="dropdown-menu">
                        <a onClick={goToHome}>Home</a>
                        <a onClick={goToUserInfo}>Profile</a>
                        <button onClick={logout}>Logout</button>
                        <a href="#">Films</a>
                        <a href="#">Diary</a>
                        <a href="#">Reviews</a>
                        <a href="#">Watchlist</a>
                        <a href="#">List</a>
                        <a href="#">Likes</a>
                        <a href="#">Tags</a>
                        <a href="#">Network</a>
                    </div>
                </div>
            ) : (
                <Link to="/login">Login</Link>
            )}
                <ZapIcon className="icon-sm flash-icon" />
                    <a href="#">Films</a>
                    <a href="#">Lists</a>
                    <a href="#">Members</a>
                    <a href="#">Journal</a>
                <SearchIcon className="icon-sm" />
            </nav>

            <div className='log-container'>
                <button className='log-button'></button>
            </div>
        </header>
    );
}
