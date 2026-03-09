import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { MainNavbar } from "@/components/layout/Navbar";
import { MetaHeader } from "@/components/layout/MetaHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "AXA Middle East - Protecting What Matters Most",
  description: "As a leading insurance company in Lebanon we strive to provide you integral protection solutions in motor, Property, Health and Life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/*
          We define the standard layout wrapper here:
          - A relative container to hold the MetaHeader, Navbar, Main Content, and Footer.
          Note: This must be a clean flex layout. 
        */}
        <div className="relative flex min-h-screen flex-col bg-gray-50 lg:pb-0">
          <div className="relative flex flex-col flex-1">
            <MetaHeader />
            <MainNavbar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
