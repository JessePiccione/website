export default function ContactForm(){
    return (
        <form>
            <fieldset>
                <label htmlFor='name'>Name:</label>
                <input id='name'/>
                <label htmlFor='phone'>Phone:</label>
                <input id='phone'/>
                <label htmlFor='email'>Email:</label>
                <input id='email'/>
                <label htmlFor='subject'>Subject:</label>
                <input id='subject'/>
                <label htmlFor='description'>Description:</label>
                <textarea id='description'></textarea>
                <button type='submit'>Contact Me</button>
            </fieldset>
        </form>
    )
}