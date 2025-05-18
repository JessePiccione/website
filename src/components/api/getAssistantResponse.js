'use server'
export default async function getAssistantResponse(message){
    try{
        const token = process.env.BACKEND_API_TOKEN
        const res = await fetch('https://portal.piccione.dev/api/assistant/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
        })
        const data = await res.json()
        return data.reply || data.response || data.message || '...'
    }catch(e){
        console.log(e.message)
        return 'Sorry, something went wrong.'
    }
}
