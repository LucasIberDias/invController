import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>

            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}