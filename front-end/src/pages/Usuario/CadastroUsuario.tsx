import { useState } from "react";

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

export default function CadastroUsuario() {
    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        codigoEmpresa: ""
    });

    function cadastrarUsuario() {
        console.log(usuario);
    }

    return (
        <AuthLayout>
            <Card>

                <CardHeader>
                    <CardTitle>
                        Cadastro de Usuário
                    </CardTitle>

                    <CardDescription>
                        Cadastre-se em uma empresa para começar.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">

                    <TextInput
                        id="nomeUsuario"
                        label="Nome"
                        placeholder="Nome do usuário"
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
                        placeholder="usuario@email.com"
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

                    <TextInput
                        id="codigoEmpresa"
                        label="Codigo da Empresa"
                        placeholder="Solicite para sua empresa o codigo de acesso"
                        value={usuario.confirmarSenha}
                        onChange={(e) =>
                            setUsuario({
                                ...usuario,
                                codigoEmpresa: e.target.value,
                            })
                        }
                    />

                    <div className="flex gap-3">

                        <Button
                            variant="outline"
                            className="flex-1"
                        >
                            Voltar
                        </Button>

                        <Button
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                            onClick={cadastrarUsuario}
                        >
                            Cadastrar
                        </Button>

                    </div>

                </CardContent>

            </Card>
        </AuthLayout>
    );
}