'use server'
import getData from '@/components/api/getData'
export default async function SkillCard(){
    const skills = await getData('api/skill/category/')
    return (
        <section className='card'>
            <h3>Relevant Skills</h3>
            <ul>
                {skills.map(({category_name})=><li key={category_name}>{category_name}</li>)}
            </ul>
        </section>
    )
}