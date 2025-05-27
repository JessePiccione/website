'use server'
import getData from '@/components/api/getData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Reveal from '@/components/reveal'
export default async function SkillCard(){
    const skills = await getData('api/skill/category/')
    return (
        <Reveal as='section' className='card'>
            <h3>Relevant Skills</h3>
            <ul>
                {skills.map(({category_name})=> (
                    <li key={category_name}>
                        <FontAwesomeIcon icon={faCode} className='icon-md' /> {category_name}
                    </li>
                ))}
            </ul>
        </Reveal>
    )
}