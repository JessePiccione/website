import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function SocialMediaList(){
    return (
        <ul>
            <li key='linkedin'>
                <a src='https://www.linkedin.com/in/jesse-piccione'>
                    LinkedIn
                    &nbsp;
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
            <li key='github'>
                <a src='https://www.github.com/jessepiccione'>
                    Github
                    &nbsp;
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
            <li key='facebook'>
                <a src='https://www.facebook.com/jesse.piccione'>
                    FaceBook
                    &nbsp;
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
            </li>
            <li key='instagram'>
                <a src='https://wwww.instagram.com/jessepiccione'>
                    Instagram
                    &nbsp;
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </li>
        </ul>
    )
}