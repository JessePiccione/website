export default function Certification({certification}){
    return (
        <ul>
            {certification.map((cert)=><li>{JSON.stringify(cert)}</li>)}
        </ul>
    )
}