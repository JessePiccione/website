export default function Skill({skill}){
    return (
        <ul>
            {skill.map((s)=><ListItem key={s.name+"_"+s.id} {...s}/>)}
        </ul>
    )
}
function ListItem({category_name, skills, ...props}){
    return (
        <li {...props}>
            <strong>{category_name}</strong> - {skills.map((s,index,arr)=>{
                return (index===arr.length-1)?s.name:s.name+", "
            })}
        </li>
    )
}