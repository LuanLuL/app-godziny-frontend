import { Routes, Route, Navigate } from "react-router-dom";
import {
  headerItems,
  ItemAppBar,
} from "../ui/layout/appModuleManeger/AppModuleManeger";

export const AppRouterSwitch = () => {
  return (
    <Routes>
      {headerItems.map((route: ItemAppBar) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
