export default function Project({project}){
    return (
        <ul>
            {project.map((obj=><ListItem key={obj.name+"_"+obj.id} {...obj}/>))}
        </ul>
    )
}
function ListItem({name, sponser, start_date, end_date, contribution, ...props}){
    return (
        <li {...props}>
            <p>
                <strong>{name}</strong> - {sponser} - ({start_date} - {end_date})
            </p>
            <p>{contribution}</p>
        </li>
    )
}