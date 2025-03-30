'use server'
export default async function getData(endpoint){
    try{
        const req = await fetch(`https://portal.piccione.dev/${endpoint}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {revalidate: 30}
        })
        const res = await req.json()
        return res

    } catch(e){
        console.log(e.message)
        return [e.message]
    }
}