import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core/";
import "./CustomServicesNav.scss";

const CustomServicesNav = props => {
  const { t } = useTranslation();
  const buildNav = () => {
    const servicesKeys = Object.keys(props.servicesObject);
    const nav = [];
    do {
      const keySplice = servicesKeys.splice(0, 4);
      nav.push(
        <div className="row">
          {keySplice.map((key, index) => (
            <>
              <Button key={key}>{t(`services.service.${key}.title`)}</Button>
              {index + 1 !== keySplice.length && <span>|</span>}
            </>
          ))}
        </div>
      );
    } while (servicesKeys.length > 0);
    return nav;
  };
  return <div className="services-nav">{buildNav()}</div>;
};

export default CustomServicesNav;
