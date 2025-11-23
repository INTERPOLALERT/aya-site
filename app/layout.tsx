import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aya Liona - Content Creator & Artist",
  description: "Welcome to Aya Liona's official website. Discover my latest projects, news, and creative journey.",
  keywords: ["Aya Liona", "content creator", "artist", "portfolio"],
  authors: [{ name: "Aya Liona" }],
  openGraph: {
    title: "Aya Liona - Content Creator & Artist",
    description: "Welcome to Aya Liona's official website",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
