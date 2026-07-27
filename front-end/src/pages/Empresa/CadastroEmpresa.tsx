import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthLayout } from "@/components/layout/AuthLayout";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/forms/TextInput";

export default function CadastroEmpresa() {
    const navigate = useNavigate();

    const [etapa, setEtapa] = useState(1);

    const [empresa, setEmpresa] = useState({
        nomeFantasia: "",
        cnpj: "",
        email: "",
        telefone: ""
    });

    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    });

    return (
        <AuthLayout>
            <Card>

                <CardHeader>
                    <CardTitle>
                        {etapa === 1 ? "Cadastro da Empresa" : "Usuario"}
                    </CardTitle>

                    <CardDescription>
                        {etapa === 1
                            ? "Cadastre sua empresa para começar."
                            : "Agora crie o primeiro usuario da empresa."}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">

                    {etapa === 1 ? (
                        <>
                            <TextInput
                                id="nome"
                                label="Nome Fantasia"
                                placeholder="Digite o nome da empresa"
                                value={empresa.nomeFantasia}
                                onChange={(e) =>
                                    setEmpresa({
                                        ...empresa,
                                        nomeFantasia: e.target.value,
                                    })
                                }
                            />

                            <TextInput
                                id="cnpj"
                                label="CNPJ"
                                placeholder="00.000.000/0000-00"
                                value={empresa.cnpj}
                                onChange={(e) =>
                                    setEmpresa({
                                        ...empresa,
                                        cnpj: e.target.value,
                                    })
                                }
                            />

                            <TextInput
                                id="email"
                                label="E-mail"
                                type="email"
                                placeholder="empresa@email.com"
                                value={empresa.email}
                                onChange={(e) =>
                                    setEmpresa({
                                        ...empresa,
                                        email: e.target.value,
                                    })
                                }
                            />

                            <TextInput
                                id="telefone"
                                label="Telefone"
                                placeholder="(45) 99999-9999"
                                value={empresa.telefone}
                                onChange={(e) =>
                                    setEmpresa({
                                        ...empresa,
                                        telefone: e.target.value,
                                    })
                                }
                            />

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => navigate("/cadastro")}
                                >
                                    Cadastrar Usuario
                                </Button>

                                <Button
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                                    onClick={() => setEtapa(2)}
                                >
                                    Próximo
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <TextInput
                                id="nomeUsuario"
                                label="Nome"
                                placeholder="Nome do Usuario"
                                value={usuario.nome}
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        nome: e.target.value,
                                    })
                                }
                            />

                            <TextInput
                                id="cpf"
                                label="CPF"
                                placeholder="000.000.000-00"
                                value={usuario.cpf}
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        cpf: e.target.value,
                                    })
                                }
                            />

                            <TextInput
                                id="emailUsuario"
                                label="E-mail"
                                type="email"
                                placeholder="admin@email.com"
                                value={usuario.email}
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        email: e.target.value,
                                    })
                                }
                            />

                            <TextInput
                                id="senha"
                                label="Senha"
                                type="password"
                                placeholder="********"
                                value={usuario.senha}
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        senha: e.target.value,
                                    })
                                }
                            />

                            <TextInput
                                id="confirmarSenha"
                                label="Confirmar Senha"
                                type="password"
                                placeholder="********"
                                value={usuario.confirmarSenha}
                                onChange={(e) =>
                                    setUsuario({
                                        ...usuario,
                                        confirmarSenha: e.target.value,
                                    })
                                }
                            />

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => setEtapa(1)}
                                >
                                    Voltar
                                </Button>

                                <Button
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                                >
                                    Cadastrar
                                </Button>
                            </div>
                        </>
                    )}

                </CardContent>
            </Card>
        </AuthLayout>
    );
}