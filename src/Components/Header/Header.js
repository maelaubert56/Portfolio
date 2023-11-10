import './Header.css';

function Header() {
    return (
        <header>
            <img src="/logo250.png" alt="logo" />
            <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Experiences</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
        </header>
    );
}

export default Header;