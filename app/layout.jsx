import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageTransition from "@/app/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://lionforge.com"),
  title: {
    default: "LionForge - Agence de développement web & mobile",
    template: "%s | LionForge",
  },
  description: "Agence de développement web et mobile, solutions sur mesure pour entreprises. Next.js, React Native, applications SaaS.",
  keywords: [
    "développement web",
    "application mobile",
    "React",
    "Next.js",
    "SaaS",
    "agence digitale",
    "Paris",
    "France",
  ],
  authors: [{ name: "LionForge", url: "https://lionforge.com" }],
  creator: "LionForge",
  publisher: "LionForge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "LionForge - Solutions digitales sur mesure",
    description: "Donnez vie à vos projets avec des technologies modernes et une équipe d'experts passionnés.",
    url: "https://lionforge.com",
    siteName: "LionForge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LionForge - Agence de développement",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LionForge - Développement web & mobile",
    description: "Solutions digitales sur mesure pour votre entreprise.",
    images: ["/og-image.jpg"],
    creator: "@lionforge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
    yandex: "votre-code-yandex",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-lion-dark text-white antialiased`}>
        <Navbar />
        <main className="pt-20">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}