'use server'
import {SecretManagerServiceClient} from "@google-cloud/secret-manager"
const client = new SecretManagerServiceClient()
export default async function formMessage({name, phone, Message, email, subject}){
    try{
        const [secretToken] = await client.accessSecretVersion({
            name: 'projects/643140685725/secrets/backend-api-token/versions/1'
        })
        const requestToken = secretToken.payload.data.toString()
        const context ={
            "email": email,
            "name": name,
            "phone": phone,
            "subject": subject,
            "message": Message
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
        ).then(res=>res.json()).then(res=>console.log(res))
    }
    catch(error){
        console.log(error.message)
    }
}