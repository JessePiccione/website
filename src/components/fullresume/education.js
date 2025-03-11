export default function Education({education}){
    return (
        <ul>
            {education.map((edu)=><li>{JSON.stringify(edu)}</li>)}
        </ul>
    )
}