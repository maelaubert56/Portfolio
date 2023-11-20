import './PresentationBlock.css'
import {useTranslation} from "react-i18next";

function PresentationBlock() {
    const { t, i18n } = useTranslation()

    return (
        <div id="PresentationBlock">
            <h2>{t('Presentation_Title')}</h2>
            <p>{t('Presentation_Description')}</p>
        </div>
    );
}

export default PresentationBlock;