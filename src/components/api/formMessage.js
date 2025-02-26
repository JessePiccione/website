'use server'
export default async function formMessage({name, phone, description, email, subject}){
    return await fetch(
        'https://jessepiccione-info-backend.ue.r.appspot.com/api/skill/category/'
    )
}