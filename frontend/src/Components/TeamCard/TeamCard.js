/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import { FiInfo } from "react-icons/fi";
import "./TeamCard.scss";

const TeamCard = ({ name, body, image }) => {
  const [showDetails, setShowDetails] = useState();
  return (
    <Box
      className={`team-card ${showDetails ? "team-card--show-body" : ""}`}
      sx={{
        display: "flex",
        backgroundImage: `linear-gradient(${
          showDetails
            ? "0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)"
            : "to bottom, transparent 50%, rgba(0, 0, 0, 0.7)"
        }),url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <Typography
        className={`team-card-heading ${showDetails ? "team-card-heading--no-margin" : ""}`}
        variant="h3"
      >
        {name}
      </Typography>
      {showDetails && (
        <Typography className="team-card-body" variant="body2">
          {body}
        </Typography>
      )}
      <IconButton
        className="team-card-button"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <FiInfo size={36} color="white" />
      </IconButton>
    </Box>
  );
};

export default TeamCard;
