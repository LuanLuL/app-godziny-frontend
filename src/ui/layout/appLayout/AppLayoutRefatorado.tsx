import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "../../sysComponents/scrollToTop/ScrollToTop";
import { AppHeader } from "../appHeader/AppHeader";
import Styles from "./AppLayoutRefatoradoStyles";
import { SysAppLayoutContext } from "../../../app/AppLayout";
import { AppRouterSwitch } from "../../../app/AppRouterSwitch";
import { AppSidebar } from "../appSideBar/AppSideBar";

export const AppLayoutRefatorado = React.memo(() => {
  const { isMobile } = useContext(SysAppLayoutContext);
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
