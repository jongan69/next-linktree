import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from './lib/registry'
import "./globals.css";
import { cssVariables } from './variables'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jons Link Tree",
  description: "A linktree built in Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{cssVariables}</style>
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
