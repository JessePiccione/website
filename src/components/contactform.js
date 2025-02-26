"use client"
import {useState} from 'react'
export default function ContactForm(){
    const [isTouched, setIsTouched] = useState(false)
    const touch = (e) => {
        setIsTouched(true)
    }
    //name state
    const [name, setName] = useState('')
    const onNameChange = (e) => setName(e.target.value)
    const checkName = () => (name.length <=0) ? '*Required' : ''
    //phone state
    const [phone, setPhone] = useState('')
    const onPhoneChange = (e) => setPhone(e.target.value)
    const checkPhone = () => {
        if(!phone.length) return '*Required'
        if(!phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)){
            return "*Required Format 123-456-7890"
        }
        return ''
    }
    //email state
    const [email, setEmail] = useState('')
    const onEmailChange = (e) => setEmail(e.target.value)
    const checkEmail = () => {
        if (email.length <= 0 ) return '*Required'
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) return '*Required Email is failing the regex check.'
        return ''
    }
    //subject state
    const [subject, setSubject] = useState('')
    const onSubjectChange = (e) => setSubject(e.target.value)
    const checkSubject = () => (subject.length <= 0) ? '*Required' : ''
    //description state
    const [description, setDescription] = useState('')
    const onDescriptionChange = (e) => setDescription(e.target.value) 
    const checkDescription = () =>(description.length <= 0) ? '*Require' : ''
    const isValid = (callable) => (callable) ? callable() === '' : false
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (
            isValid(checkName()) |
            isValid(checkPhone()) |
            isValid(checkEmail()) |
            isValid(checkSubject()) |
            isValid(checkDescription())
        ) {
            
        }
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <fieldset>
                <section>
                    <label htmlFor='name'>Name</label>
                    <input onTouchStart={touch} id='name' name='name' type='text'
                        placeholder="Name" value={name} onChange={onNameChange}/>
                    <p>{checkName()}</p>
                </section>
                <section>
                    <label htmlFor='phone'>Phone</label>
                    <input onTouchStart={touch} id='phone' type='tel' placeholder='123-456-7890' value={phone} onChange={onPhoneChange}/>
                    <p>{checkPhone()}</p>
                </section>
                <section>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' placeholder='example@piccione.dev' value={email} onChange={onEmailChange}/>
                    <p>{checkEmail()}</p>
                </section>
                <section>
                    <label htmlFor='subject'>Subject</label>
                    <input onTouchStart={touch} id='subject' type='text' placeholder='Subject' value={subject} onChange={onSubjectChange}/>
                    <p>{checkSubject()}</p>
                </section>
                <section>
                    <label htmlFor='description'>Description</label>
                    <textarea onTouchStart={touch} id='description' placeholder='Description' value={description} onChange={onDescriptionChange}></textarea>
                    <p>{checkDescription()}</p>
                </section>
                <section>
                    <button type='submit'>Contact Me</button>
                </section>
            </fieldset>
        </form>
    )
}