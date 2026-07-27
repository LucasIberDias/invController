import { api } from "@/lib/api";

export const empresaService = {

    listar() {
        return api.get("/empresa/listar");
    },

    cadastrar(dados: any) {
        return api.post("/empresa", dados);
    }

};