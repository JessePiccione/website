'use server'
export default async function getData(endpoint){
    try{
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://portal.piccione.dev'
        const req = await fetch(`${backendUrl}/${endpoint}`,{
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