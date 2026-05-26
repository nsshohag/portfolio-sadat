import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2
                  className="greeting-nickname"
                  style={{ color: theme.text }}
                >
                  ( {greeting.nickname}{" "}
                  {greeting.company && (
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="pathao-tooltip">
                          <strong>{greeting.company.name}</strong>
                        </Tooltip>
                      }
                    >
                      <a
                        href={greeting.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={greeting.company.name}
                        className="greeting-company-link"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <span
                          className="iconify"
                          data-icon={greeting.company.icon}
                          data-inline="false"
                          style={{
                            fontSize: "1.15em",
                            verticalAlign: "middle",
                          }}
                        />
                      </a>
                    </OverlayTrigger>
                  )}
                  )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
