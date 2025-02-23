import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
export default function ContactInfoList(){
    return (
        <ul>
            <li>
                <a>
                    <FontAwesomeIcon icon ={faPhone}/>
                    &nbsp;
                    +1(732)-908-0037
                </a>
            </li>
        </ul>
    )
}