import "./StudiesAndExperiencesBlock.css";
import timeline from "../../assets/timeline.svg";
import { useTranslation } from "react-i18next";
import { use } from "i18next";

function StudiesAndExperiencesBlock() {
  const { t, i18n } = useTranslation();

  return (
    <div id="StudiesAndExperiencesBlock">
      <h2>{t("StudiesAndExperiences_Title")}</h2>
      <div>
        <img src={timeline} alt="timeline" />

        <div className="logo">
          <div>
            <div>
              <img
                src={t("StudiesAndExperience_Efrei_Image")}
                alt={t("StudiesAndExperience_Efrei_Alt")}
              />
            </div>
          </div>
        </div>
        <div className="logo">
          <div>
            <div>
              <img
                src={t("StudiesAndExperience_Logteam_Image")}
                alt={t("StudiesAndExperience_Logteam_Alt")}
              />
            </div>
          </div>
        </div>
        <div className="logo">
          <div>
            <div>
              <img
                src={t("StudiesAndExperience_APU_Image")}
                alt={t("StudiesAndExperience_APU_Alt")}
              />
            </div>
          </div>
        </div>

        <div className="description">
          <h3>{t("StudiesAndExperience_Efrei")}</h3>
          <span>{t("StudiesAndExperience_Efrei_Date")}</span>
          <p>{t("StudiesAndExperience_Efrei_Description")}</p>
        </div>
        <div className="description">
          <h3>{t("StudiesAndExperience_Logteam")}</h3>
          <span>{t("StudiesAndExperience_Logteam_Date")}</span>
          <p>{t("StudiesAndExperience_Logteam_Description")}</p>
        </div>
        <div className="description">
          <h3>{t("StudiesAndExperience_APU")}</h3>
          <span>{t("StudiesAndExperience_APU_Date")}</span>
          <p>{t("StudiesAndExperience_APU_Description")}</p>
        </div>
      </div>
    </div>
  );
}

export default StudiesAndExperiencesBlock;
