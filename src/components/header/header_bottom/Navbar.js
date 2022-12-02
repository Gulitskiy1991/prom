import "./NavbarStyles.scss"

import { Icon } from "react-icons-kit"
import { bars } from "react-icons-kit/fa/bars"
import { times } from "react-icons-kit/fa/times"

import logoRu from "../../../assets/images/logo_ru.png"
import logoEn from "../../../assets/images/logo_en.png"

import langRu from "../../../assets/images/lang_ru.png"
import langEn from "../../../assets/images/lang_en.png"

import { useState } from "react"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [logo, setLogo] = useState(logoRu)
  const [langTrans, setLangTrans] = useState()
  const [iconLang, setIconLang] = useState(langEn)
  const [lang, setLang] = useState("English")
  const [icon, setIcon] = useState(bars)
  const [active, setActive] = useState("nav-menu")

  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    if (lang === "English") {
      setIconLang(langRu)
      setLogo(logoEn)
      setLang("Русский")
      setLangTrans("ru")
      i18n.changeLanguage(language)
    } else {
      setIconLang(langEn)
      setLang("English")
      setLangTrans("en")
      setLogo(logoRu)
      i18n.changeLanguage(language)
    }
  }

  const handleBarClick = () => {
    if (icon === bars) {
      setIcon(times)
      setActive("nav-menu active")
    } else {
      setIcon(bars)
      setActive("nav-menu")
    }
  }

  return (
    <nav className="NavbarItems">
      <div className="navbarlogo">
        <h1>
          <img src={logo} alt="промпривод" />
        </h1>
      </div>
      <ul className={active}>
        <li>
          <a href="/" className="nav-links">
            {t("about")}
          </a>
          <hr className="separator" />
        </li>
        <li>
          <a href="/">{t("services")}</a>
          <hr className="separator" />
        </li>
        <li>
          <a href="/">{t("products")}</a>
          <hr className="separator" />
        </li>
        <li>
          <a href="/">{t("article")}</a>
          <hr className="separator" />
        </li>
        <li>
          <a href="/">{t("contacts")}</a>
          <hr className="separator" />
        </li>
        <li>
          <a href="/">{t("order")}</a>
        </li>
      </ul>
      <button
        style={{ color: "#707070", margin: "0 40px", border: "none" }}
        onClick={() => changeLanguage(langTrans)}
      >
        <img src={iconLang} alt="" />
        {lang}
      </button>
      <div className="menu-icons">
        <Icon icon={icon} onClick={handleBarClick}></Icon>
      </div>
    </nav>
  )
}

export default Navbar
