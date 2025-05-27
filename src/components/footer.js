import Logo from '@/images/logo'
import NavList from './navlist'
import SocialMediaList from '@/components/socialmedialist'
import ContactInfoList from '@/components/contactinfolist'
import Reveal from '@/components/reveal'
export default function Footer(){
    return (
        <Reveal as='footer' id='Footer' className='Footer'>
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
        </Reveal>
    )
}