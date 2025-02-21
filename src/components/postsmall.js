export default function Post({technologies, title, description, URL}){
    return (
        <section className='blog-post'>
            <article>
                <iframe title={title} src={URL}></iframe>
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
        </section>
    )
}