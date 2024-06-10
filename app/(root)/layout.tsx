import { routesConfig } from "@/config/routes";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { ModeToggle } from "@/components/mode-toggle";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-50 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <MainNav items={routesConfig.mainNav} />
                    <nav className="flex items-center gap-5">
                    
                        <ModeToggle />
                    </nav>
                </div>
            </header>
            <main className="container flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
