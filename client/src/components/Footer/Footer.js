import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
           <footer>
               <hr className='decorative-line-start'/>
               <ul>
                    <li><a href='https://github.com/eugeneyjy' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href='https://www.linkedin.com/in/eugene-yong-b6a514179/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a></li>
               </ul>
               <hr className='decorative-line-end'/>
                
            </footer>     
        </>
    );
}

export default Footer;