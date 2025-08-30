import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/SpaceGrotesk[wght].woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
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
        url: "/images/profil.png",
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
    images: ["/images/profil.png"],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background dark:bg-background-secondary text-text-primary dark:text-text-primary transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
