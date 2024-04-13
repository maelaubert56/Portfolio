import "./ContactBlock.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

function ContactBlock() {
  const { t, i18n } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
          <a href="mailto:mael.aubert@efrei.net">
            <img src="/tiles/email.png" alt="email" />
          </a>
        </div>
      </div>
      <div className="right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder={t("Contact_Form_Name")}
            required
            name="name"
          />
          <input
            type="email"
            placeholder={t("Contact_Form_Email")}
            required
            name="email"
          />
          <textarea
            placeholder={t("Contact_Form_Message")}
            required
            name="message"
          />
          <input type="submit" value={t("Contact_Form_Button")} />
        </form>
      </div>
    </div>
  );
}

export default ContactBlock;
