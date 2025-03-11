export default function Certification({certification}){
    return (
        <ul>
            {certification.filter(c=> c.issuer).map((cert)=><ListItem key={cert.title+cert.id} {...cert}/>)}
        </ul>
    )
}
function ListItem({awards,title, issuer, year, ...props}){
    return (
        <li {...props}>
            {issuer} - {title} - <strong>Completed {year}</strong>
        </li>
    )
}