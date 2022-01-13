import React from "react";
import { Typography } from "@material-ui/core/";

import "./CustomDivider.scss";

const CustomDivider = ({copy}) => {
  return (
    <div className="divider">
      <div className="filter-gradient">
        <Typography className="divider-text" variant="body1" align="center">
          <i>{copy}</i>
        </Typography>
      </div>
    </div>
  );
};

export default CustomDivider;
