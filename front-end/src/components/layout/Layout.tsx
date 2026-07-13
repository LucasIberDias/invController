type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center">
            {children}
        </main>
    );
}