'use server'
export default async function getAssistantResponse(message){
    try{
        const token = process.env.BACKEND_API_TOKEN
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://portal.piccione.dev'
        const res = await fetch(`${backendUrl}/api/assistant/`, {
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
