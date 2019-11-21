import React from "react";
import { Container } from "@material-ui/core";
import { Email, LocationOn, Phone } from "@material-ui/icons";
import { FooterList } from "Components/";
import { useTranslation } from "react-i18next";
import logo from "Assets/images/tbw-logo.png";
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
      icon: Email,
      primaryText: t("footer.connectList.email")
    },
    {
      icon: Phone,
      primaryText: t("footer.connectList.phone")
    }
  ];

  const linkTitle = t("footer.linksList.title");
  const linksList = [
    {
      primaryText: t("nav.services"),
      link: "/Services"
    },
    {
      primaryText: t("nav.projects"),
      link: "/projects"
    },
    {
      primaryText: t("nav.careers"),
      link: "/Careerso"
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
        <div className="footer-column">
          <h3 className="footer-subtitle">{linkTitle}</h3>
          <FooterList listItems={linksList} />
        </div>
        <div className="footer-column">
          <h3 className="footer-subtitle">{hourTitle}</h3>
          <FooterList listItems={hoursList} />
        </div>
        <div className="footer-column">
          <img className="footer-logo" src={logo} alt="temp" />
        </div>
      </Container>
    </div>
  );
};

export default CustomFooter;
