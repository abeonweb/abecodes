import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { links } from "../data.js";
import linkedin from "../images/linkedin.svg";
import githubSocial from "../images/github-social.svg";
import twitter from "../images/twitter.svg";
import email from "../images/envelope.svg";
import logo from "../images/abecodes.png";

export default function Footer() {
  const linksList = links.map((data, index) => {
    if (
      data.name === "Contact" ||
      data.name === "Home" ||
      data.name === "Portfolio"
    ) {
      return (
        <li key={index + 1}>
          <HashLink smooth to={data.link} className={"footer-nav-link"}>
            {data.name}
          </HashLink>
        </li>
      );
    }
    if (index === 0) {
      return (
        <li key={index + 1}>
          <NavLink to={data.link} end className="footer-nav-link">
            {data.name}
          </NavLink>
        </li>
      );
    }
    return (
      <li key={index + 1}>
        <NavLink to={data.link} className="footer-nav-link">
          {data.name}
        </NavLink>
      </li>
    );
  });
  return (
    <footer className="footer">
      <div className="footer-nav-container">
        <nav className="footer-nav-links">
          <ul className="footer-nav-list">{linksList}</ul>
        </nav>
        {/* <nav className="footer-nav">
                        <ul className="footer-nav-list">
                            <li>
                                <NavLink to="terms"  className="footer-nav-link">Terms & Conditions</NavLink>
                            </li>
                            <li>
                                <NavLink to="privacy"  className="footer-nav-link">Privacy Policy</NavLink>
                            </li>
                        </ul>           
                    </nav>  */}
        <div className="footer-social-media-container">
          <h4 className="footer-social-media-text">Let&apos;s connect.</h4>
          <ul className="footer-nav-list-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/abeonweb/"
                target="_blank"
                className="footer-social-link"
                rel=" noopener noreferrer"
                title="linkedin"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="footer-social-icon"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/abeonweb"
                target="_blank"
                className="footer-social-link"
                rel=" noopener noreferrer"
                title="twitter"
              >
                <img
                  src={twitter}
                  alt="twitter"
                  className="footer-social-icon"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/abeonweb"
                target="_blank"
                className="footer-social-link"
                rel=" noopener noreferrer"
                title="github"
              >
                <img
                  src={githubSocial}
                  alt="github"
                  className="footer-social-icon"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@abecodes.com"
                target="_blank"
                className="footer-social-link"
                rel=" noopener noreferrer"
                title="email"
              >
                <img
                  src={email}
                  alt="email"
                  className="footer-social-icon"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          {/* <div className="footer-logo-container"> */}
          <img src={logo} alt="" className="footer-logo" />
          {/* </div> */}
          <div className="copyright-info">
            <div>&copy;2022 designed and </div>
            <div>developed by Abe Oke </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
