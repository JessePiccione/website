export default function Education({education}){
    return (
        <ul>
            {education.map((edu)=><ListItem key={edu.school_name} {...edu}/>)}
        </ul>
    )
}
function ListItem({school_name, location, degree_type, start_date, end_date, ...props}){
    return (
        <li {...props}>
            {degree_type} - {school_name}, {location} - <strong>Completed {end_date}</strong>
        </li>
    )
}