"use client"
import {useState} from 'react'
export default function ContactForm(){
    //name state
    const [name, setName] = useState('')
    const onNameChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const checkName = () => {
        return (name.length <=0)?'*Required':''
    }
    //phone state
    const [phone, setPhone] = useState('')
    const onPhoneChange = (e) => {
        e.preventDefault()
        setPhone(e.target.value)
    }
    const checkPhone = () => {
        if(!phone.length) return '*Required'
        if(!phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)){
            return "*Required Format 123-456-7890"
        }
        return ''
    }
    //email state
    const [email, setEmail] = useState('')
    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const checkEmail = () => {
        if (email.length <= 0 ) return '*Required'
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) return '*Required Email is failing the regex check.'
        return ''
    }
    //subject state
    const [subject, setSubject] = useState('')
    const onSubjectChange = (e) => {
        e.preventDefault()
        setSubject(e.target.value)
    }
    const checkSubject = () => {
        if (subject.length <= 0) return '*Required'
        return ''
    }
    //description state
    const [description, setDescription] = useState('')
    const onDescriptionChange = (e) => {
        e.preventDefault()
        setDescription(e.target.value) 
    }
    const checkDescription = () => {
        if (description.length <= 0) return '*Required'
        return ''
    }
    return (
        <form>
            <fieldset>
                <section>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' type='text'
                        placeholder="Name" value={name} onChange={onNameChange}/>
                    <p>{checkName()}</p>
                </section>
                <section>
                    <label htmlFor='phone'>Phone</label>
                    <input id='phone' type='tel' placeholder='123-456-7890' value={phone} onChange={onPhoneChange}/>
                    <p>{checkPhone()}</p>
                </section>
                <section>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' placeholder='example@piccione.dev' value={email} onChange={onEmailChange}/>
                    <p>{checkEmail()}</p>
                </section>
                <section>
                    <label htmlFor='subject'>Subject</label>
                    <input id='subject' type='text' placeholder='Subject' value={subject} onChange={onSubjectChange}/>
                    <p>{checkSubject()}</p>
                </section>
                <section>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' placeholder='Description' value={description} onChange={onDescriptionChange}></textarea>
                    <p>{checkDescription()}</p>
                </section>
                <section>
                    <button type='submit'>Contact Me</button>
                </section>
            </fieldset>
        </form>
    )
}