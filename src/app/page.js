import Nav from '@/components/nav'
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'
import '@/styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
export default function Page(){
    return (
        <>
            <Nav/>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}
//