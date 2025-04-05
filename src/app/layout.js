import '@fontsource/roboto-serif/variable.css';
import '@fontsource/roboto-serif/variable-italic.css';
import '@fontsource/work-sans/variable.css';
import '@fontsource/work-sans/variable-italic.css';

export default function RootLayout(props){
    return (
        <html lang='en'>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}