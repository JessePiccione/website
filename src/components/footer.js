import Logo from '@/images/logo'
import NavList from './navlist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function Footer(){
    return (
        <footer className='Footer'>
            <Logo/>
            <section>
                <h3>Navigation</h3>
                <NavList/>
            </section>
            <section>
                <h3>Social Media</h3>
                <ul>
                    <li>
                        <a src='https://www.linkedin.com/in/jesse-piccione'>
                            LinkedIn
                            &nbsp;
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </li>
                    <li>
                        <a src='https://www.github.com/jessepiccione'>
                            Github
                            &nbsp;
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                    <li>
                        <a src='https://www.facebook.com/jesse.piccione'>
                            FaceBook
                            &nbsp;
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </li>
                    <li>
                        <a src='https://wwww.instagram.com/jessepiccione'>
                            Instagram
                            &nbsp;
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </li>
                </ul>
            </section>
            
        </footer>
    )
}