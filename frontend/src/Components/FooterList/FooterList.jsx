import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import "./FooterList.scss";

const FooterList = ({ listItems, classname }) => {
  if (listItems) {
    return (
      <List className="footerlist" component="ul">
        {listItems.map(listItem => (
          <ListItem className={`${classname} footerlist-item`} key={listItem.primaryText}>
            {listItem.icon && (
              <ListItemIcon className="icon">
                <listItem.icon />
              </ListItemIcon>
            )}
            {listItem.secondaryText && (
              <ListItemText className="secondary-text" primary={listItem.secondaryText} />
            )}
            {listItem.link ? (
              <Link className="primary-text-link" to={listItem.link ? listItem.link : null}>
                <ListItemText className="primary-text" primary={listItem.primaryText} />
              </Link>
            ) : (
              <ListItemText className={`primary-text`} primary={listItem.primaryText} />
            )}
          </ListItem>
        ))}
      </List>
    );
  }
  return null;
};

export default FooterList;
