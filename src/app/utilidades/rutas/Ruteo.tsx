import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Noencontrado } from "../../componentes/contenedor/Noencontrado";
import { Quienes } from "../../componentes/otros/Quienes";
import { ListEquipos } from "../../componentes/equipos/ListEquipos";
import { RegisEquipos } from "../../componentes/equipos/RegisEquipos";
import { AdminEquipos } from "../../componentes/equipos/AdminEquipos";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<Noencontrado />} />
      <Route path="/quienes" element={<Quienes />} />
      <Route path="/adm" element={<AdminEquipos />} />
      <Route path="/list" element={<ListEquipos />} />
      <Route path="/regist" element={<RegisEquipos />} />
    </Routes>
  );
};
