import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Collapse, MenuItem, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { SysAppLayoutContext } from "../../../app/AppLayout";

export const AppSidebar = () => {
  const { isMobile } = useContext(SysAppLayoutContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setButtons();
  }, [pathname]);

  const setButtons = () => {
    basicAppButtons();
  };

  const basicAppButtons = () => {
    // const moduleSidebar = getSideBar(location.pathname);
    // const sidebar = moduleSidebar?.length > 0 ? moduleSidebar : [];
    // const list: IAppSideBarButton[] = (sidebar || []).map((item: IAppMenu) => {
    //   const sideButton: IAppSideBarButton = {
    //     icon: item.icon,
    //     action: () => {
    //       navigate(item.path!);
    //     },
    //     name: item.name,
    //     label: item.name,
    //     path: item.path,
    //     active: location.pathname.includes(item.path!),
    //     isProtected: false,
    //   };
    //   return sideButton;
    // });
  };

  const expandHandle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box
        sx={{
          zIndex: 5,
          height: "100%",
          backgroundColor: "yellow",
        }}
      >
        opatudobem
      </Box>
    </>
  );
};
