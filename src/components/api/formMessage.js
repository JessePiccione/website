'use server'
import {SecretManagerServiceClient} from "@google-cloud/secret-manager"
const client = new SecretManagerServiceClient()
export default async function formMessage({name, phone, description, email, subject}){
    try{
        const [secretToken] = await client.accessSecretVersion({
            name: 'projects/643140685725/secrets/backend-api-token/versions/1'
        })
        const requestToken = secretToken.payload.data.toString()
        const context ={
            "name":name,
            "phone":phone,
            "email":email,
            "subject":subject,
            "message":description
        }
        await fetch(
            'https://jessepiccione-info-backend.ue.r.appspot.com/api/message/',
            {
                method:'POST',
                headers:{
                    "Authorization":`Token ${requestToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(context),
            }
        ).then(res=>res.json()).then(res=>console.log(res))
    }
    catch(error){
        console.log(error.message)
    }
}