import '@fontsource-variable/roboto-serif';
import '@fontsource-variable/work-sans';

export default function RootLayout(props){
    return (
        <html lang='en'>
            <head>
                <title>Jesse Piccione Development</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}