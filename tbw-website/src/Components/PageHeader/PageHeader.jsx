import React from "react";
import "./PageHeader.scss";

const PageHeader = ({ imagePath, pageTitle }) => {
  return (
    <div
      className="page-header"
      style={{
        backgroundImage: `url(${imagePath})`
      }}
    >
      <h1 className="page-header-text">{pageTitle}</h1>
    </div>
  );
};

export default PageHeader;
