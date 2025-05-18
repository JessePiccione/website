"use client"
import formMessage from '@/components/api/formMessage'
import {useState} from 'react'
export default function ContactForm(){
    const [isTouched, setIsTouched] = useState(false)
    const touch = () => {
        setIsTouched(true)
    }
    //name state
    const [name, setName] = useState('')
    const onNameChange = (e) => setName(e.target.value)
    const checkName = () => {
        if(!isTouched) return null
        return (name.length <=0) ? '*Required' : ''
    }
    //phone state
    const [phone, setPhone] = useState('')
    const onPhoneChange = (e) => setPhone(e.target.value.replace(/\D/g, ''))
    const checkPhone = () => {
        if (!isTouched) return null
        if (!phone.length) return '*Required'
        if (phone.length !== 10) {
            return '*Required Format 123-456-7890'
        }
        return ''
    }
    const formatPhone = (number) => {
        return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    }
    //email state
    const [email, setEmail] = useState('')
    const onEmailChange = (e) => setEmail(e.target.value)
    const checkEmail = () => {
        if(!isTouched) return null
        if (email.length <= 0 ) return '*Required'
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) return '*Required Email is failing the regex check.'
        return ''
    }
    //subject state
    const [subject, setSubject] = useState('')
    const onSubjectChange = (e) => setSubject(e.target.value)
    const checkSubject = () =>{
        if (!isTouched) return null
        return (subject.length <= 0) ? '*Required' : ''
    }
    //Message state
    const [message, setMessage] = useState('')
    const onMessageChange = (e) => setMessage(e.target.value)
    const checkMessage = () =>{
        return (!isTouched)?null:(message.length <= 0) ? '*Required' : ''
    }
    const isValid = (callable) => (callable) ? callable() === '' : false
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (
            isValid(checkName) &&
            isValid(checkPhone) &&
            isValid(checkEmail) &&
            isValid(checkSubject) &&
            isValid(checkMessage)
        ) {
            try {
                await formMessage({name, email, message, subject, phone})
            } catch (error) {
                console.error(error)
                alert('Failed to send your message. Please try again later.')
                return
            }
            setIsTouched(false)
            setName('')
            setPhone('')
            setEmail('')
            setSubject('')
            setMessage('')
            alert('Thank you for your message. I will get back to you as soon as possible.')
        }
        else {
            alert("Please fill out the form correctly. Thank you.")
        }
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <fieldset>
                <section>
                    <label htmlFor='name'>Name</label>
                    <input onClick={touch} id='name' name='name' type='text'
                        placeholder="Name" value={name} onChange={onNameChange}/>
                    <p>{checkName()}</p>
                </section>
                <section>
                    <label htmlFor='phone'>Phone</label>
                    <input onClick={touch} id='phone' type='tel' placeholder='123-456-7890' maxLength='12' value={formatPhone(phone)} onChange={onPhoneChange}/>
                    <p>{checkPhone()}</p>
                </section>
                <section>
                    <label htmlFor='email'>Email</label>
                    <input onClick={touch} id='email' type='email' placeholder='example@piccione.dev' value={email} onChange={onEmailChange}/>
                    <p>{checkEmail()}</p>
                </section>
                <section>
                    <label htmlFor='subject'>Subject</label>
                    <input onClick={touch} id='subject' type='text' placeholder='Subject' value={subject} onChange={onSubjectChange}/>
                    <p>{checkSubject()}</p>
                </section>
                <section>
                    <label htmlFor='message'>Message</label>
                    <textarea onClick={touch} id='message' placeholder='Message' value={message} onChange={onMessageChange}></textarea>
                    <p>{checkMessage()}</p>
                </section>
                <section>
                    <button onClick={touch} type='submit'>Contact Me</button>
                </section>
            </fieldset>
        </form>
    )
}