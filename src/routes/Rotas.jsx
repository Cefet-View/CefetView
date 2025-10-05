import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Tour from "../pages/Tour.jsx";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
    </Routes>
  );
}
