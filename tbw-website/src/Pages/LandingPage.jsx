import React from "react";
import CustomToolbar from "../Components/CustomToolbar";
import { useTranslation } from 'react-i18next';
import '../i18n';

function LandingPage() {
    const { t } = useTranslation(); 
    return (
        <CustomToolbar title={t("title")}></CustomToolbar>
    );
}

export default LandingPage;