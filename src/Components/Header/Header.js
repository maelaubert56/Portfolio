import './Header.css';

function Header() {
    return (
        <header>
            <img src="/logo250.png" alt="logo" />
            <ul>
                <li><a href="#ProjectsBlock">Projects</a></li>
                <li><a href="#StudiesAndExperiencesBlock">Experiences</a></li>
                <li><a href="#ContactBlock">Contact Me</a></li>
            </ul>
        </header>
    );
}

export default Header;