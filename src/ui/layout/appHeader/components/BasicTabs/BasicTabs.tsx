import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  getValueAppHeader,
  sysAppBarOptions,
} from "../../../appModuleManeger/AppModuleManeger";
import { useLocation, useNavigate } from "react-router-dom";

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    setValue(getValueAppHeader(pathname));
  }, [pathname]);

  return (
    <Tabs
      value={value}
      aria-label="basic tabs example"
      sx={{ minHeight: "40px", height: "40px" }}
    >
      {sysAppBarOptions
        .filter((item) => item.active)
        .map((route, index) => (
          <Tab
            key={`route${index}:${route.label}`}
            onClick={() => navigate(route.path)}
            label={`${route.label}`}
            sx={{
              fontWeight: 400,
              color: (theme) => theme.palette.common.black,
              padding: "10px 12px",
              minHeight: "40px",
              height: "40px",
            }}
            {...a11yProps(index)}
          />
        ))}
    </Tabs>
  );

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
}
