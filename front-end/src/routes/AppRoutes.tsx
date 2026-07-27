import { BrowserRouter, Routes, Route } from "react-router-dom";

import CadastroEmpresa from "@/pages/Empresa/CadastroEmpresa";
import CadastroUsuario from "@/pages/Usuario/CadastroUsuario.tsx";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CadastroEmpresa />} />
                <Route path="/cadastro" element={<CadastroUsuario />} />/
            </Routes>
        </BrowserRouter>
    );
}