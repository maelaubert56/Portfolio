import "./TechnosBlock.css";
import { useTranslation } from "react-i18next";

function TechnosBlock({ ref }) {
  const { t } = useTranslation();

  return (
    <div id="TechnosBlock" ref={ref}>
      <div className="banner"></div>
      <div className="content">
        <h2>{t("Technos_Title")}</h2>
        <div>
          <div className="techos_subpart">
            <p>{t("Technos_Front")}</p>
            <div>
              <div>
                <img src="/technos_logo/html5.png" alt="html5" />
                <img src="/technos_logo/css3.png" alt="css3" />
                <img src="/technos_logo/js.png" alt="js" />
              </div>
              <div>
                <img src="/technos_logo/reactjs.png" alt="react" />
                <img src="/technos_logo/nextjs.png" alt="next" /></div>
              <img src="/technos_logo/vuejs.png" alt="vue" />
            </div>
          </div>
          <div className="techos_subpart">
            <p>{t("Technos_Back")}</p>
            <div>
              <img src="/technos_logo/nodejs.png" alt="nodejs" />
              <img src="/technos_logo/expressjs.png" alt="expressjs" />
              <img src="/technos_logo/prisma.svg" alt="prisma" />
              <div>
                <img src="/technos_logo/mysql.svg" alt="mysql" />
                <img src="/technos_logo/postgres.png" alt="postgres" />
              </div>
            </div>
          </div>
          <div className="techos_subpart">
            <p>{t("Technos_Others")}</p>
            <div>
              <div><img src="/technos_logo/git.png" alt="git" />
                <img src="/technos_logo/github.png" alt="github" />
                <img src="/technos_logo/gitlab.png" alt="gitlab" />
              </div>

              <img src="/technos_logo/ts.png" alt="ts" />
              <img src="/technos_logo/docker.png" alt="docker" />
              <img src="/technos_logo/figma.png" alt="figma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnosBlock;
