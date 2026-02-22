import { Backdrop, Drawer } from "@mui/material";
import SideAppBarList from "./components/appSideBarList/AppSideBarList";
import { sysShadows } from "../../sysMaterialUi/shadow/sysShadows";
import { headerItems } from "../appModuleManeger/AppModuleManeger";
import sysSizing from "../../sysMaterialUi/sizing/sysSizes";

export const widthsSideAppBar = 300;
export const heightsSideAppBarStart = sysSizing.contentPb;

interface IAppSideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AppSideBar: React.FC<IAppSideBarProps> = ({ open, setOpen }) => {
  return (
    <>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          backgroundColor: "transparent",
        }}
      />
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            position: "fixed",
            top: heightsSideAppBarStart,
            height: `calc(100% - ${heightsSideAppBarStart}px)`,
            width: open ? widthsSideAppBar : 0,
            backgroundColor: (t) => t.palette.common.white,
            transition: (t) =>
              t.transitions.create("width", {
                easing: t.transitions.easing.sharp,
                duration: t.transitions.duration.standard,
              }),
            overflowX: "hidden",
            borderRight: "none",
            zIndex: (t) => t.zIndex.drawer + 2,
            boxShadow: open ? sysShadows.shadow2 : "none",
          },
        }}
      >
        <SideAppBarList items={headerItems} isDrawerOpen={open} />
      </Drawer>
    </>
  );
};

export default AppSideBar;
