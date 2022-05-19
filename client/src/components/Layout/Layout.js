import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

function Layout(props) {
    return (
        <>
            <Navbar/>
            <div className='content'>
                {props.children}
            </div>
            <Footer/>
        </>
    );
}

export default Layout;