import './Header.css';
import { useTranslation } from 'react-i18next';

function ChangeLanguage() {
    const { t, i18n } = useTranslation()

    return (
        <div className="ChangeLanguage">
            <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="sp">Español</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    );
}

function Header() {
    const { t, i18n } = useTranslation()

    return (
        <header>
            <img src="/logo250.png" alt="logo" />
            <ul>
                <li><a href="#ProjectsBlock">{t('Header_Links_Projects')}</a></li>
                <li><a href="#StudiesAndExperiencesBlock">{t('Header_Links_Experiences')}</a></li>
                <li><a href="#ContactBlock">{t('Header_Links_Contact')}</a></li>
                <li><ChangeLanguage /></li>

            </ul>
        </header>
    );
}

export default Header;