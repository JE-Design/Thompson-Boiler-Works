import React from "react";
import { useTranslation } from "react-i18next";
import { CustomToolbar, CustomFooter } from "Components/";

function LandingPage() {
  const { t } = useTranslation();
  return (
    <>
      <CustomToolbar title={t("title")} />
      <CustomFooter />
    </>
  );
}

export default LandingPage;
