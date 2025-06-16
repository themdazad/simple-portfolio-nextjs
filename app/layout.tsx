import type { Metadata } from "next";
import "./globals.css";

import {Navbar} from "@/components/navigation"

export const metadata: Metadata = {
  title: "Portfolio @themdazad",
  description: "Created in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
