import './Navbar.css';
import logo from '../../../src/portfolio-logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <header>
                <a href='/'><img src={logo} alt='logo' className='logo'/></a>
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