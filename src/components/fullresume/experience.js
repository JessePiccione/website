export default function Experience({experience}){
    return (
        <ul>
            {experience.map((obj)=><ListItem key={obj.title_held} {...obj}/>)}
        </ul>
    )
}
function ListItem({title_held, company_name, location, start_date, end_date, description,...props}){
    return (
        <li {...props}>
            <strong>{title_held}</strong> - <em>{company_name}</em> - {location} - ({start_date} - {end_date})
            <p>{description}</p>
        </li>
    )
}