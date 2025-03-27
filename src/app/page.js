import Nav from '@/components/nav'
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'
import FullResume from '@/components/fullresume/fullresume'
import FullResumeState from '@/components/providers/fullresumestate'
import PostBrowserProvider from '@/components/providers/postbrowserstate'
import PostBrowser from '@/components/postbrowser/postbrowser'
import '@/styles/style.sass'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
export default function Page(){
    return (
        <>
            <Nav/>
            <Header/>
            <PostBrowserProvider>
                <FullResumeState>
                    <FullResume/>
                    <Main/>
                    <PostBrowser/>
                </FullResumeState>
            </PostBrowserProvider>
            <Footer/>
        </>
    )
}
//