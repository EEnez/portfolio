import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://enez-gubeljic.com'),
  title: "Enez Gubeljic | Développeur Full Stack Junior - React, Symfony, TypeScript",
  description: "Développeur full stack junior spécialisé en React 18, TypeScript, Symfony 7 et MySQL. Portfolio avec projets concrets incluant gestion de contenu et sites clients. Basé à Bruxelles, disponible pour opportunités développement web moderne.",
  keywords: [
    "Enez Gubeljic",
    "développeur full stack junior",
    "React 18",
    "TypeScript", 
    "Symfony 7",
    "MySQL",
    "Tailwind CSS",
    "Next.js",
    "portfolio développeur",
    "Bruxelles",
    "développement web moderne",
    "JavaScript",
    "PHP",
    "Node.js"
  ],
  authors: [{ name: "Enez Gubeljic", url: "https://enez-gubeljic.com" }],
  creator: "Enez Gubeljic",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://enez-gubeljic.com",
    siteName: "Portfolio Enez Gubeljic",
    title: "Enez Gubeljic | Développeur Full Stack Junior",
    description: "Développeur full stack junior spécialisé en React, TypeScript et Symfony. Découvrez mes projets et compétences techniques.",
    images: [
      {
        url: "/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Enez Gubeljic - Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enez Gubeljic | Développeur Full Stack Junior",
    description: "Développeur full stack junior spécialisé en React, TypeScript et Symfony. Portfolio avec projets concrets.",
    creator: "@Enez_Gubeljic",
    images: ["/profil.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">

      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-text-primary transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
