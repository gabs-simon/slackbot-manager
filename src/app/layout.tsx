import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

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
      <body className={cn(
        "min-h-screen bg-background font-sans antialised",
        GeistSans.variable,
      )}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
