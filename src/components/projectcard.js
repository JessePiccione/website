'use server'
import getData from '@/components/api/getData'
export default async function ProjectCard(){
    let projects = await getData('api/project/')
    if(!Array.isArray(projects)){
        console.error('Project data is not an array')
        projects = []
    }
    return (
        <section className='card'>
            <h3>Project Contributions</h3>
            <ul>
                {projects.reverse().map(({name})=><li key={name}>{name}</li>)}
            </ul>
        </section>
    )
}
