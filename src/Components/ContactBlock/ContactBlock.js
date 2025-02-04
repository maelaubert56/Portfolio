import "./ContactBlock.css";
import { useTranslation } from "react-i18next";

function ContactBlock() {
  const { t } = useTranslation();

  return (
    <div id="ContactBlock">
      <div className="left">
        <h2>{t("Contact_Title")}</h2>
        <p>{t("Contact_Description")}</p>
        <div>
          <a href="https://www.linkedin.com/in/mael-aubert/">
            <img src="/tiles/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/maelaubert56">
            <img src="/tiles/github.png" alt="github" />
          </a>
          <a href="mailto:maelaubert56@gmail.com">
            <img src="/tiles/email.png" alt="email" />
          </a>
        </div>
      </div >
      <div className="right">
        <form action="#">
          <input type="text" placeholder={t("Contact_Form_Name")} required />
          <input type="email" placeholder={t("Contact_Form_Email")} required />
          <textarea placeholder={t("Contact_Form_Message")} required></textarea>
          <button>{t("Contact_Form_Button")}</button>
        </form>
      </div>
    </div >
  );
}

export default ContactBlock;
