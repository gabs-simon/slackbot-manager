import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "~/components/theme-provider";
import Header from "~/components/layout/admin/header";

import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Slackbot Manager",
  description: "Slackbot Manager App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialised min-h-screen bg-background font-sans",
          GeistSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <div className="flex min-h-screen w-full flex-col">
              <Header />
              <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                {children}
              </main>
            </div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
