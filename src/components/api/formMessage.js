'use server'
export default async function formMessage({name, phone, description, email, subject}){
    return await fetch(
        'https://jessepiccione-info-backend.ue.r.appspot.com/api/message/',
        {
            method:'POST',
            body:{
                "name":name,
                "phone":phone,
                "email":email,
                "subject":subject,
                "message":description
            }
        }
    ).then(res=>res.text()).then(res=>console.log(res))
}