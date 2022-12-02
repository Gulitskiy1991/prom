import { FaLinkedinIn } from "react-icons/fa"
import { GrMail, GrYoutube } from "react-icons/gr"
import { GiRotaryPhone } from "react-icons/gi"
import { AiFillFacebook, AiFillHome } from "react-icons/ai"

import "./HeaderTop.scss"
import { useTranslation } from "react-i18next"

function HeaderTop() {
  const { t } = useTranslation()

  return (
    <div className="top-bar">
      <h3>{t("topbar.title")}</h3>
      <ul>
        <GrMail />
        <li>
          <a href="mailto:prom-privod@mail.ru">prom-privod@mail.ru</a>
        </li>
        <GiRotaryPhone />
        <li>+375 (17) 363-47-09</li>
        <AiFillHome />
        <li>220026, Беларусь, Минск, пер. Бехтерева, 8, оф. 220П</li>
      </ul>
      <div className="socials">
        <a
          href="https://www.facebook.com/promprivodby/"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/promprivod/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaLinkedinIn style={{ margin: "0 5px" }} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCuSkYqsLOZzJXD6sQXRdtkQ"
          target={"_blank"}
          rel="noreferrer"
        >
          <GrYoutube />
        </a>
      </div>
    </div>
  )
}

export default HeaderTop
