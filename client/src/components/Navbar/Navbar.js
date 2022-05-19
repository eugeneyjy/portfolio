import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <header>
                <a href='/' className='logo'>Eugene's Directory</a>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </header>
        </>
    );
}

export default Navbar;