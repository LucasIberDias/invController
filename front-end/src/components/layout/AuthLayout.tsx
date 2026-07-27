import { ReactNode } from "react";
import { Logo } from "./Logo";

type Props = {
    children: ReactNode;
};

export function AuthLayout({ children }: Props) {
    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md space-y-8">

                <Logo />

                {children}

            </div>

        </main>
    );
}