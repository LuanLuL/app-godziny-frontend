import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "../../sysComponents/scrollToTop/ScrollToTop";
import { AppHeader } from "../appHeader/AppHeader";
import Styles from "./AppLayoutStyles";
import SysAppContext from "../../../app/AppContext";
import { AppRouterSwitch } from "../../../app/AppRouterSwitch";
import AppSideBar from "../appSideBar/AppSideBar";

export const AppLayout = React.memo(() => {
  const { isMobile } = useContext(SysAppContext);
  const [openSideAppBar, setOpenSideAppBar] = useState<boolean>(false);

  return (
    <Router>
      <ScrollToTop />
      <Styles.AppScreen>
        <AppHeader open={openSideAppBar} setOpen={setOpenSideAppBar} />
        <Styles.AppBody sx={{ flexDirection: !isMobile ? "row" : "column" }}>
          <Styles.AppContainerRouterSwitch id={"routerSwitch"}>
            <AppRouterSwitch />
          </Styles.AppContainerRouterSwitch>
        </Styles.AppBody>
        <AppSideBar open={openSideAppBar} setOpen={setOpenSideAppBar} />
      </Styles.AppScreen>
    </Router>
  );
});
