export function Logo() {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                I
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
                InvController
            </h1>

            <p className="text-slate-500 text-sm">
                Controle inteligente do patrimônio
            </p>
        </div>
    );
}