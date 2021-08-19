import React from "react";
import { Container } from "@material-ui/core";
import { LocationOn, Phone } from "@material-ui/icons";
import { FooterList } from "Components/";
import { useTranslation } from "react-i18next";
import logo from "Assets/images/tbw-logo.png";
import { RouterPaths } from "Utils";
import RenderInBrowser from "react-render-in-browser";
import "./CustomFooter.scss";

const CustomFooter = () => {
  const { t } = useTranslation();

  const connectTitle = t("footer.connectList.title");
  const connectList = [
    {
      icon: LocationOn,
      primaryText: t("footer.connectList.address")
    },
    {
      icon: Phone,
      primaryText: t("footer.connectList.phone")
    }
  ];

  const linkTitle = t("footer.linksList.title");
  const linksList = [
    {
      primaryText: t("nav.about"),
      link: RouterPaths.ABOUT
    },
    {
      primaryText: t("nav.services"),
      link: RouterPaths.SERVICES
    },
    {
      primaryText: t("nav.projects"),
      link: RouterPaths.PROJECTS
    },
    {
      primaryText: t("nav.careers"),
      link: RouterPaths.CAREERS
    }
  ];

  const hourTitle = t("footer.hoursList.title");
  const hoursList = [
    {
      secondaryText: t("footer.hoursList.weekdays"),
      primaryText: t("footer.hoursList.weekdayTimes")
    },
    {
      secondaryText: t("footer.hoursList.weekends"),
      primaryText: t("footer.hoursList.weekendTimes")
    }
  ];
  return (
    <div className="footer">
      <Container className="footer-container">
        <div className="footer-column">
          <h3 className="footer-subtitle">{connectTitle}</h3>
          <FooterList listItems={connectList} />
        </div>
        <RenderInBrowser except ie>
          <div className="footer-column">
            <h3 className="footer-subtitle">{linkTitle}</h3>
            <FooterList listItems={linksList} />
          </div>
        </RenderInBrowser>
        <div className="footer-column">
          <h3 className="footer-subtitle">{hourTitle}</h3>
          <FooterList listItems={hoursList} classname="hour-items" />
        </div>
        <div className="footer-column">
          <img className="footer-logo" src={logo} alt={t("footer.imageAlt")} />
        </div>
      </Container>
    </div>
  );
};

export default CustomFooter;
