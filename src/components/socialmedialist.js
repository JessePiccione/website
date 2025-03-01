import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function SocialMediaList(){
    return (
        <ul>
            <li key='linkedin'>
                <a src='https://www.linkedin.com/in/jesse-piccione'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    &nbsp;LinkedIn
                </a>
            </li>
            <li key='github'>
                <a src='https://www.github.com/jessepiccione'>
                    <FontAwesomeIcon icon={faGithub}/>
                    &nbsp;Github
                </a>
            </li>
            <li key='facebook'>
                <a src='https://www.facebook.com/jesse.piccione'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    &nbsp;Facebook
                </a>
            </li>
            <li key='instagram'>
                <a src='https://wwww.instagram.com/jessepiccione'>
                    <FontAwesomeIcon icon={faInstagram}/>
                    &nbsp;Instagram
                </a>
            </li>
        </ul>
    )
}