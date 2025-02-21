export default async function ProjectCard(){
    let projects;
    try{
        projects = await fetch('https://jessepiccione-info-backend.ue.r.appspot.com/api/projects/').then(res=>res.json())
    }
    catch(error){
        projects = error
    }
    return (
        <section className='card'>
            <h3>Project Contributions</h3>
            <ul>
                {projects.map(({name})=><li>{name}</li>)}
            </ul>
        </section>
    )
}