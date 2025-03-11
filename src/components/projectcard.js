export default async function ProjectCard(){
    let projects;
    try{
        projects = await fetch('https://portal.piccione.dev/api/project/').then(res=>res.json())
    }
    catch(error){
        projects = error
    }
    return (
        <section className='card'>
            <h3>Project Contributions</h3>
            <ul>
                {projects.map(({name})=><li key={name}>{name}</li>)}
            </ul>
        </section>
    )
}