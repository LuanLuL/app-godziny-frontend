import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Box from "@mui/material/Box";
import ScrollToTop from "../../sysComponents/scrollToTop/ScrollToTop";
import { AppHeader } from "../appHeader/AppHeader";
import Styles from "./AppLayoutRefatoradoStyles";
import { SysAppLayoutContext } from "../../../app/AppLayout";
import { AppRouterSwitch } from "../../../app/AppRouterSwitch";

export const AppLayoutRefatorado = React.memo(() => {
  const { isMobile } = useContext(SysAppLayoutContext);
  return (
    <Router>
      <ScrollToTop />
      <Styles.AppScreen>
        <AppHeader />
        <Styles.AppContainerRouterSwitch id={"routerSwitch"}>
          <AppRouterSwitch />
        </Styles.AppContainerRouterSwitch>
        {!isMobile && (
          <Styles.AppContainerSideBar>
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: "0%",
                zIndex: 5,
                width: "72px",
                height: "calc(100vh - 64px)",
                backgroundColor: "yellow",
              }}
            >
              opatudobem
            </Box>
          </Styles.AppContainerSideBar>
        )}
      </Styles.AppScreen>
    </Router>
  );
});
