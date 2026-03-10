import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageTransition from "@/app/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://lionforge.vercel.app"),
  title: {
    default: "LionForge - Agence de développement web & mobile",
    template: "%s | LionForge",
  },
  description: "Agence de développement web et mobile, solutions sur mesure pour entreprises. Next.js, React Native, applications SaaS.",
  keywords: ["développement web", "application mobile", "React", "Next.js", "SaaS", "agence digitale"],
  authors: [{ name: "LionForge", url: "https://lionforge.vercel.app" }],
  creator: "LionForge",
  openGraph: {
    title: "LionForge - Solutions digitales sur mesure",
    description: "Donnez vie à vos projets avec des technologies modernes.",
    url: "https://lionforge.vercel.app",
    siteName: "LionForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LionForge",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon1.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.className} bg-lion-dark text-white antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="pt-20 min-h-screen">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}