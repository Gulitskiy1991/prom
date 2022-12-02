import HeaderTop from "./header_top/HeaderTop"
import "./Header.scss"
import Navbar from "./header_bottom/Navbar"

function Header() {
  return (
    <div className="navbar">
      <HeaderTop />
      <Navbar />
    </div>
  )
}

export default Header
