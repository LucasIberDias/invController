import api from "@/lib/api";

export async function cadastrarEmpresa(dados: any) {
    const response = await api.post("/empresa/cadastro", dados);
    return response.data;
}