import React from "react";
import "./PageHeader.scss";

const PageHeader = ({ imagePath, pageTitle, backgroundPosition }) => {
  return (
    <div
      className="page-header"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundPosition: `${backgroundPosition}`
      }}
    >
      <h1 className="page-header-text">{pageTitle}</h1>
    </div>
  );
};

export default PageHeader;
