import './Navbar.css';

function Navbar() {
    return (
        <>
            <header>
                <a href='/' className='logo'>E</a>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </header>
        </>
    );
}

export default Navbar;