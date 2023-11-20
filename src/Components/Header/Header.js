import './Header.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';


function ChangeLanguage() {
    const { t, i18n } = useTranslation()

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'Français' },
        { code: 'sp', name: 'Español' },
        { code: 'de', name: 'Deutsch' },
    ];

    const [dropdown,setDropdown] = useState(false)


    useEffect(() => {
        // call api or anything
        document.getElementById("dropdown-btn").innerHTML =
            "<img src='/flags/flag_" + i18n.language + ".svg' alt='" + i18n.language + "'/>";
        //fill the dropdown with the languages
        document.getElementById("dropdown-content").innerHTML = "";
        languages.forEach(language => {
            if (language.code !== i18n.language) {
                document.getElementById("dropdown-content").innerHTML +=
                    "<a href='#' id='" + language.code + "'>" +
                    "<img src='/flags/flag_" + language.code + ".svg' alt='" + language.name + "'/>" +
                    language.name +
                    "</a>";
            }
        });

    }, [i18n.language]);

    //add the event listeners to the dropdown
    languages.forEach(language => {
        if (language.code !== i18n.language) {
            try {
                document.getElementById(language.code).addEventListener("click", () => {
                    i18n.changeLanguage(language.code);
                    document.getElementById("dropdown-btn").innerHTML =
                        "<img src='/flags/flag_" + i18n.language + ".svg' alt='" + i18n.language + "'/>";
                    setDropdown(false)
                });
            } catch (error) {
                console.log(error)
            }
        }
    });


    return (
        <div className="ChangeLanguage">
            <button id="dropdown-btn" onClick={() => setDropdown(!dropdown)}>{t('Header_Links_Language')}</button>
                <div id="dropdown-content" className={dropdown ? "show" : ""}>
                </div>
        </div>

    );
}
/* get the useStates transmitted from App.js */
function Header({ theme, setTheme }) {
    const { t, i18n } = useTranslation()
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <header>
            <img src={theme === 'light' ? "/logo250.png" : "/icon_white.svg"} alt="Logo" id="Logo" />
            <ul>
                <li><a href="/" onClick={e => {
                    let div = document.getElementById("ProjectsBlock");
                    e.preventDefault();  // Stop Page Reloading
                    div && div.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>{t('Header_Links_Projects')}</a></li>
                <li><a href="/" onClick={e => {
                    let div = document.getElementById("StudiesAndExperiencesBlock");
                    e.preventDefault();  // Stop Page Reloading
                    div && div.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>{t('Header_Links_Experiences')}</a></li>
                <li><a href="/" onClick={e => {
                    let div = document.getElementById("ContactBlock");
                    e.preventDefault();  // Stop Page Reloading
                    div && div.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>{t('Header_Links_Contact')}</a></li>
                <li><ChangeLanguage /></li>
                <label htmlFor="toggle" id="toggle-label" onChange={toggleTheme}>

                    <div id="toggle-div">
                        <input type="checkbox" id="toggle" />
                        <div className="clouds">
                            <div className="cloud cloud-1"></div>
                            <div className="cloud cloud-2"></div>
                            <div className="cloud cloud-3"></div>
                            <div className="cloud cloud-4"></div>
                            <div className="cloud cloud-5"></div>
                        </div>
                        <div className="backdrops">
                            <div className="backdrop"></div>
                        </div>
                        <div className="stars">
                            <div className="star star-1"></div>
                            <div className="star star-2"></div>
                            <div className="star star-3"></div>
                        </div>
                        <div className="sun-moon">
                            <div className="crater"></div>
                        </div>
                    </div>
                </label>
            </ul>

        </header>
    );
}

export default Header;