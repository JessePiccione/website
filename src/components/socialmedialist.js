import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function SocialMediaList(){
    return (
        <ul>
            <li key='linkedin'>
                <a href='https://www.linkedin.com/in/jesse-piccione' aria-label='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedin} className='icon-lg' />
                </a>
            </li>
            <li key='github'>
                <a href='https://www.github.com/jessepiccione' aria-label='GitHub'>
                    <FontAwesomeIcon icon={faGithub} className='icon-lg' />
                </a>
            </li>
            <li key='facebook'>
                <a href='https://www.facebook.com/jesse.piccione' aria-label='Facebook'>
                    <FontAwesomeIcon icon={faFacebook} className='icon-lg' />
                </a>
            </li>
            <li key='instagram'>
                <a href='https://www.instagram.com/jessepiccione' aria-label='Instagram'>
                    <FontAwesomeIcon icon={faInstagram} className='icon-lg' />
                </a>
            </li>
        </ul>
    )
}