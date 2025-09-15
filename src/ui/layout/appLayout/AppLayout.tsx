import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "../../sysComponents/scrollToTop/ScrollToTop";
import { AppHeader } from "../appHeader/AppHeader";
import Styles from "./AppLayoutStyles";
import SysAppContext from "../../../app/AppContext";
import { AppRouterSwitch } from "../../../app/AppRouterSwitch";
import { AppSidebar } from "../appSideBar/AppSideBar";

export const AppLayout = React.memo(() => {
  const { isMobile } = useContext(SysAppContext);
  return (
    <Router>
      <ScrollToTop />
      <Styles.AppScreen>
        <AppHeader />
        <Styles.AppBody sx={{ flexDirection: !isMobile ? "row" : "column" }}>
          {!isMobile && (
            <Styles.AppContainerSideBar>
              <AppSidebar />
            </Styles.AppContainerSideBar>
          )}
          <Styles.AppContainerRouterSwitch id={"routerSwitch"}>
            <AppRouterSwitch />
          </Styles.AppContainerRouterSwitch>
        </Styles.AppBody>
      </Styles.AppScreen>
    </Router>
  );
});
