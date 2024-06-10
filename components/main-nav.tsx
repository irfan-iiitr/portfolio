"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";


interface MainNavProps {
    items?: any[];
    children?: React.ReactNode;
}

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const pathname = usePathname();

    React.useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);

    return (
        <div className="flex gap-6 md:gap-10 ">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <span className="font-heading text-2xl">
                    Home
                </span>
            </Link>


            {items?.length ? (
                <nav className="hidden gap-10 md:flex ">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "flex items-center transition-colors hover:text-foreground/80 sm:text-sm",
                            )}
                        >
                            <span className="font-heading text-2xl">  {item.title}</span>
                          
                        </Link>
                    ))}
                </nav>
            ) : null}



            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Icons.close /> : <Icons.menu />}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    );
}
