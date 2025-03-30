'use server'
export default async function SkillCard(){
    const skills = await fetch('https://portal.piccione.dev/api/skill/category/').then(res=>res.json())
    return (
        <section className='card'>
            <h3>Relevant Skills</h3>
            <ul>
                {skills.map(({category_name})=><li key={category_name}>{category_name}</li>)}
            </ul>
        </section>
    )
}