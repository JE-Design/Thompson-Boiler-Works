import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import "./FooterList.scss";

const FooterList = ({ listItems }) => {
  if (listItems) {
    return (
      <List className="footerlist" component="nav">
        {listItems.map(listItem => (
          <ListItem className="footerlist-item" key={listItem.primaryText}>
            {listItem.icon && (
              <ListItemIcon className="icon">
                <listItem.icon />
              </ListItemIcon>
            )}
            {listItem.secondaryText && (
              <ListItemText className="secondary-text" primary={listItem.secondaryText} />
            )}
            {listItem.primaryText && (
              <ListItemText className="primary-text" primary={listItem.primaryText} />
            )}
          </ListItem>
        ))}
      </List>
    );
  }
  return null;
};

export default FooterList;
