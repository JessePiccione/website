import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function ContactInfoList(){
    return (
        <ul>
            <li key="phoneNumber">
                <a href='tel:7329080037'>
                    <FontAwesomeIcon icon={faPhone}/>
                    &nbsp;+1(732)-908-0037
                </a>
            </li>
            <li key='emailContact'>
                <a href='mailto:jesse@piccione.dev'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    &nbsp;jesse@piccione.dev
                </a>
            </li>
            <li key='location'>
                <a href='https://maps.app.goo.gl/e11M1MzYEwu392vf7'>
                    <label htmlFor='locationIframe'>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        &nbsp;Toms River, New Jersey
                    </label>
                </a>
                <iframe title='Toms River, New Jersey' id='locationIframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391236.70388095395!2d-74.49394522024458!3d39.99645668735483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19ce4a38e7105%3A0x3f5b6f5b358b3cb0!2sToms%20River%2C%20NJ!5e0!3m2!1sen!2sus!4v1740335442445!5m2!1sen!2sus" style={{"border":0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </li>
        </ul>
    )
}
