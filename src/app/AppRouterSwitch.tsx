import { Routes, Route, Navigate } from "react-router-dom";
import { Example } from "../ui/sysPages/example/Example";

export const AppRouterSwitch = () => {
  return (
    <Routes>
      <Route path="/example" element={<Example />} />
      <Route path="*" element={<Navigate to="/example" />} />
    </Routes>
  );
};
