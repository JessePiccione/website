'use server'
export default async function getData(endpoint){
    try{
        return await fetch(`https://portal.piccione.dev/${endpoint}`).then(res=>res.json())
    } catch(e){
        console.log(e.message)
        return [e.message]
    }
}