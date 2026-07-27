import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type TextInputProps = {
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TextInput({
                              id,
                              label,
                              placeholder,
                              type = "text",
                              value,
                              onChange,
                          }: TextInputProps) {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const tipoInput = type === "password" && mostrarSenha
        ? "text"
        : type;

    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>

            <div className="relative">
                <Input
                    id={id}
                    type={tipoInput}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={type === "password" ? "pr-10" : ""}
                />

                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                        {mostrarSenha ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}