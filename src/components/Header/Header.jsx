import "./Header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/svg/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container header-box">
          <a href="#">
            <NavLink to={"/"}>
              <img src={Logo} alt="" />
            </NavLink>

          </a>

          <ul className="header-list">
            <li className="header-item">
              <a href="#" className="header-link active">
                Home
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Explore{" "}
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Genre
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                News
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Movies
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                TV Shows
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000"
        data-aos-offset="0" className="header-effect"></div>
    </>
  );
}

export default Header;
