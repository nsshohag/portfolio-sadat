import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting, footer, socialMediaLinks } from "../../portfolio.js";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export default function Footer(props) {
  const theme = props.theme;
  const year = new Date().getFullYear();

  return (
    <footer
      className="site-footer"
      style={{
        borderTopColor: theme.imageHighlight,
        backgroundColor: theme.body,
        "--footer-text": theme.text,
        "--footer-accent": theme.imageHighlight,
      }}
    >
      <Fade bottom duration={1000} distance="20px">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link
                to="/home"
                className="footer-logo"
                style={{ color: theme.text }}
                onClick={scrollToTop}
              >
                <span className="footer-logo-bracket">&lt;</span>
                <span className="footer-logo-name">{greeting.logo_name}</span>
                <span className="footer-logo-bracket">/&gt;</span>
              </Link>
              <p
                className="footer-tagline"
                style={{ color: theme.secondaryText }}
              >
                {footer.tagline}
              </p>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading" style={{ color: theme.text }}>
                Navigate
              </h3>
              <ul className="footer-nav-list">
                {footer.quickLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="footer-nav-link"
                      style={{ color: theme.secondaryText }}
                      onClick={scrollToTop}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading" style={{ color: theme.text }}>
                Connect
              </h3>
              <div className="footer-social">
                {socialMediaLinks.map((media) => (
                  <a
                    key={media.name}
                    href={media.link}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={media.name}
                    style={{
                      backgroundColor: media.backgroundColor,
                      color: "#ffffff",
                    }}
                  >
                    <i className={`fab ${media.fontAwesomeIcon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="footer-divider"
            style={{ backgroundColor: theme.imageHighlight }}
          />

          <div className="footer-bottom">
            <p
              className="footer-copyright"
              style={{ color: theme.secondaryText }}
            >
              © {year}{" "}
              <span style={{ color: theme.text }}>{greeting.title}</span>. All
              rights reserved.
            </p>
            <p className="footer-meta" style={{ color: theme.secondaryText }}>
              Made with <span className="footer-heart">♥</span> using React
              {footer.showSourceLink && (
                <>
                  {" · "}
                  <a
                    href={greeting.portfolio_repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-source-link"
                    style={{ color: theme.text }}
                  >
                    {footer.sourceLinkLabel}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </Fade>
    </footer>
  );
}
