import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Post({technologies, title, description, URL}){
    return (
        <section className='blog-post'>
            <article>
                <iframe title={title} src={URL}></iframe>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>
                    <button>
                        See More
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </p>
            </article>
        </section>
    )
}