import { Work_Sans } from 'next/font/google'
import Script from 'next/script'
import ThemeToggle from '@/components/themeToggle'
import { UserProvider } from '@/components/providers/user'

const workSans = Work_Sans({
    weight: ['400', '600', '800'],
    subsets: ['latin'],
    variable: '--font-sans'
})

export const metadata = {
    metadataBase: new URL('https://piccione.dev'),
    title: 'Piccione Software Development',
    description: 'Jesse Piccione Development (piccione.dev) is the professional portfolio of Jesse Piccione, a skilled software engineer specializing in full-stack web development. This site showcases expertise in modern technologies such as Python, Django, JavaScript, and cloud platforms like Google Cloud. Featuring a dynamic e-resume, project highlights, and technical insights, piccione.dev demonstrates Jesse’s ability to craft innovative, user-focused solutions. Explore a blend of creativity and technical proficiency designed to connect with clients, employers, and fellow developers.',
    keywords: 'software development, web development, full-stack development, python, django, javascript, google cloud, portfolio',
    author: 'Jesse Piccione',
    robots: 'index, follow',
    googlebot: 'index, follow',
    google: 'notranslate',
    handheldFriendly: 'True',
    applicationName: 'Piccione Development',
    appleMobileWebAppTitle: 'Piccione Development',
    appleMobileWebAppCapable: 'yes',
    revised: '2025-04-06',
    rating: 'safe for kids',
    distribution: 'global',
    language: 'English',
    url: 'https://piccione.dev',
    canonical: 'https://piccione.dev',
    ogTitle: 'Piccione Software Development',
    ogType: 'website',
    ogUrl: 'https://piccione.dev',
    ogImage: 'https://piccione.dev/opengraph-image.png',
    ogDescription: 'Jesse Piccione Development (piccione.dev) is the professional portfolio of Jesse Piccione, a skilled software engineer specializing in full-stack web development. This site showcases expertise in modern technologies such as Python, Django, JavaScript, and cloud platforms like Google Cloud. Featuring a dynamic e-resume, project highlights, and technical insights, piccione.dev demonstrates Jesse’s ability to craft innovative, user-focused solutions. Explore a blend of creativity and technical proficiency designed to connect with clients, employers, and fellow developers.',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    iconSizes: '48x48',
    appleTouchIconSizes: '180x180',
    appleTouchIconType: 'image/png',
    appleTouchIconRel: 'apple-touch-icon',
    other: {
        'google-adsense-account': 'ca-pub-1851572737165261',
    },
}
export default function RootLayout(props){
    return (
        <html lang='en' className={workSans.variable}>
            <body>
                <UserProvider>
                    {props.children}
                    <ThemeToggle className='floating-theme-toggle'/>
                </UserProvider>
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1851572737165261"
                    crossOrigin="anonymous"
                />
            </body>
        </html>
    )
}