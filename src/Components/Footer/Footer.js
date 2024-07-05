import './Footer.css'
import {useTranslation} from "react-i18next";

function Footer() {
    const { t } = useTranslation()

    return (
        <footer>
            <img src="/icon_white.svg" alt="icon"/>
            <p>{t('Footer_Text1')}</p>
            <p>{t('Footer_Text2')}</p>
        </footer>
    );
}

export default Footer;