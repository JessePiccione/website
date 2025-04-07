import '@fontsource-variable/roboto-serif';
import '@fontsource-variable/work-sans';
export default function RootLayout(props){
    return (
        <html lang='en'>
            <head>
                <title>Piccione Software Development</title>
                
                <meta name='title' content='Piccione Software Development'/>
                <meta name='description' content="Jesse Piccione Development (piccione.dev) is the professional portfolio of Jesse Piccione, a skilled software engineer specializing in full-stack web development. This site showcases expertise in modern technologies such as Python, Django, JavaScript, and cloud platforms like Google Cloud. Featuring a dynamic e-resume, project highlights, and technical insights, piccione.dev demonstrates Jesse’s ability to craft innovative, user-focused solutions. Explore a blend of creativity and technical proficiency designed to connect with clients, employers, and fellow developers."/>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='robots' content='index, follow' />
                <meta name='googlebot' content='index, follow' />
                <meta name='google' content='notranslate' />
                <meta name='HandheldFriendly' content='True' />
                <meta name='author' content='Jesse Piccione' />
                <meta name='keywords' content='software development, web development, full-stack development, python, django, javascript, google cloud, portfolio' />
                <meta name='theme-color' content='#000000' />
                <meta name='application-name' content='Piccione Development' />
                <meta name='apple-mobile-web-app-title' content='Piccione Development' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='revised' content='2025-04-06' />
                <meta name='rating' content='safe for kids' />
                <meta name='distribution' content='global' />
                <meta name='language' content='English' />
                <meta name='url' content='https://piccione.dev' />
                <meta name='canonical' content='https://piccione.dev' />

                <meta property='og:title' content='Piccione Software Development'/>
                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://piccione.dev' />
                <meta property='og:image' content='https:/piccione.dev/opengraph-image.png'/>
                <meta property='og:description' content="Jesse Piccione Development (piccione.dev) is the professional portfolio of Jesse Piccione, a skilled software engineer specializing in full-stack web development. This site showcases expertise in modern technologies such as Python, Django, JavaScript, and cloud platforms like Google Cloud. Featuring a dynamic e-resume, project highlights, and technical insights, piccione.dev demonstrates Jesse’s ability to craft innovative, user-focused solutions. Explore a blend of creativity and technical proficiency designed to connect with clients, employers, and fellow developers."/>
                
                <link rel='icon' href='/favicon.ico' sizes='48x48' />
                <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}