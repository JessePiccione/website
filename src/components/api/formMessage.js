'use server'
export default async function formMessage({name, phone, message, email, subject}){
    try{
        const requestToken = process.env.BACKEND_API_TOKEN
        const context ={
            "email": email,
            "name": name,
            "phone": phone,
            "subject": subject,
            "message": message
        }
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://portal.piccione.dev'
        await fetch(
            `${backendUrl}/api/message/`,
            {
                method:'POST',
                headers:{
                    "Authorization": `Bearer ${requestToken}`,
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(context)
            }
        ).then(res=>res.text()).then(res=>console.log(res))
    }
    catch(error){
        console.log(error.message)
    }
}