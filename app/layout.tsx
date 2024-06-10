import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
});

interface RootLayoutProps {
    children: React.ReactNode;
}



export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontHeading.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}

                    <Toaster />
                    <ModalProvider />
                </ThemeProvider>
            </body>
        </html>
    );
}
