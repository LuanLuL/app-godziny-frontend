import { Routes, Route, Navigate } from "react-router-dom";
import { Example } from "../ui/sysPages/example/Example";

export interface IRoutes {
  label: string;
  path: string;
}

export const sysRoutes: IRoutes[] = [
  { label: "Atividades", path: "/atividade" },
  { label: "Cursos", path: "/cursos" },
  { label: "Usuários", path: "/usuarios" },
];

export const AppRouterSwitch = () => {
  return (
    <Routes>
      <Route path="/example" element={<Example />} />
      {/* <Route path="/doenca/:screenState/:id?" element={<DoencaModule />} />
      <Route path="/patogeno/:screenState/:id?" element={<PatogenoModule />} />
      <Route path="/sintoma/:screenState/:id?" element={<SintomaModule />} />
      <Route path="/apoio/diagnostico" element={<ApoioDiagnostico />} />
      <Route path="/logging" element={<Logging />} /> */}
      <Route path="*" element={<Navigate to="/example" />} />
    </Routes>
  );
};
