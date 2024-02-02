import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WB",
  description: "Tugba Dogan Webb - Take Home Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
