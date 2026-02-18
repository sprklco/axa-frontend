import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
