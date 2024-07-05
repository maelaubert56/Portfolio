import "./HelloBlock.css";
import { useTranslation } from "react-i18next";
import device_image from "../../assets/device_image.svg";
import device_image_dark from "../../assets/device_image_dark.svg";
import profile_picture from "../../assets/profile_picture.png";

function HelloBlock({ theme }) {
  const { t } = useTranslation();
  return (
    <div id="HelloBlock">
      <div>
        <div>
          <h1>{t("Hello_Title")}</h1>
          <h2>{t("Hello_Description")}</h2>
        </div>
        <img className="profile_picture" src={profile_picture} alt="" />
      </div>
      <img src={theme === "light" ? device_image : device_image_dark} alt="" />
    </div>
  );
}

export default HelloBlock;
