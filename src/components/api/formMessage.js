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
        await fetch(
            'https://portal.piccione.dev/api/message/',
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