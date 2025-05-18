import ThemeToggle from './themeToggle'

export default function navlist(props){
    return (
        <ul {...props}>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#eresume'>eResume</a>
            </li>
            <li>
                <a href='#blog'>Blog</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
            <li>
                <a href='https://portal.piccione.dev/admin/'>Portal</a>
            </li>
            <li>
                <a href='https://www.paypal.com/donate/?hosted_button_id=8QNED3VCSZHYG'>Donate</a>
            </li>
            <li>
                <ThemeToggle/>
            </li>
        </ul>
    )
}