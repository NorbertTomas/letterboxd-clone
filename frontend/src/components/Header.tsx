import letterboxdLogo from '../assets/letterboxdLogo.svg'
import avatar from '../assets/avatar.jpg'
import './Header.css'
import { ChevronDown, SearchIcon, ZapIcon } from 'lucide-react';

export function Header() {
    return (
        <header className='header'>
            <div className='header-left'>
                <img src={letterboxdLogo} alt="logo" className='logo'/>
            </div>

            <nav className='nav'>
                <div className='user-menu'>
                    <img src={avatar} alt='user' className='avatar'></img>
                    <span className='username'> ACUUUSTIC</span>
                    <ChevronDown className="icon-sm" />
                </div>
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
