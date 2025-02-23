import Logo from '@/images/logo'
import NavList from './navlist'
import SocialMediaList from '@/components/socialmedialist'
import ContactInfoList from '@/components/contactinfolist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function Footer(){
    return (
        <footer className='Footer'>
            <nav>
                <Logo/>
                <section>
                    <h3>Navigation</h3>
                    <NavList/>
                </section>
                <section>
                    <h3>Social Media</h3>
                    <SocialMediaList/>
                </section>
                <section>
                    <h3>Contact Info</h3>
                    <ContactInfoList/>
                </section>
            </nav>
        </footer>
    )
}