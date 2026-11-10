import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageTransition from "@/app/components/PageTransition";
import CustomCursor from "@/app/components/ui/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://lionforge.vercel.app"),
  title: {
    default: "LionForge — Agence Numérique & Technologique | The Digital Forge",
    template: "%s | LionForge",
  },
  description: "Agence technologique et numérique d'élite. Nous forgeons l'avenir digital : développement web moderne, applications mobiles, solutions logicielles sur mesure et innovation.",
  keywords: ["LionForge", "agence technologique", "développement web", "application mobile", "logiciel sur mesure", "Bénin", "Three.js", "Next.js", "innovation numérique", "digital forge"],
  authors: [{ name: "LionForge", url: "https://lionforge.vercel.app" }],
  creator: "LionForge",
  openGraph: {
    title: "LionForge — Agence Numérique & Technologique | The Digital Forge",
    description: "Forgez votre succès numérique. Conception d'expériences digitales immersives et développement de logiciels sur mesure.",
    url: "https://lionforge.vercel.app",
    siteName: "LionForge",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "LionForge — The Digital Forge",
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
    <html lang="fr" className="scroll-smooth bg-[#050505]">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#050505] text-[#F5F3EE] antialiased selection:bg-[#FFD700] selection:text-[#050505]" suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
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
