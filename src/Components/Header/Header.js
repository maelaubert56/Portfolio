import './Header.css';

function Header() {
    return (
        <header>
            <div className="left">
                <img src="/logo250.png" alt="logo" />
            </div>
            <div className="right">
                <ul>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;