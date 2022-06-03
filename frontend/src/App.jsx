import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CustomNavigation, CustomFooter } from "Components/";
import { RouterPaths, ScrollToTop } from "Utils";
import {
  ContactPage,
  LandingPage,
  AboutPage,
  CareersPage,
  ServicesPage,
  ProjectsPage
} from "Pages/";
import "./Styles/App.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <CustomNavigation />
        <Switch>
          <Route path={RouterPaths.ABOUT}>
            <AboutPage />
          </Route>
          <Route path={RouterPaths.SERVICES}>
            <ServicesPage />
          </Route>
          <Route path={RouterPaths.CAREERS}>
            <CareersPage />
          </Route>
          <Route path={RouterPaths.CONTACT}>
            <ContactPage />
          </Route>
          <Route path={RouterPaths.PROJECTS}>
            <ProjectsPage />
          </Route>
          <Route path={RouterPaths.LANDING}>
            <LandingPage />
          </Route>
        </Switch>
        <CustomFooter />
      </div>
    </Router>
  );
};

export default App;
