import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"; // <-- 1. Importação da Tag do Google
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Filha de Ogum - Ajuda Espiritual",
  description: "Há mais de 35 anos guiando caminhos. Amarração amorosa, leitura de cartas e libertação espiritual.",
  icons: {
    icon: "/favicon-lua.svg",
  },
  openGraph: {
    title: "Filha de Ogum - Ajuda Espiritual",
    description: "Há mais de 35 anos guiando caminhos. Amarração amorosa, leitura de cartas e libertação espiritual.",
    url: "https://filha-de-ogum.vercel.app",
    siteName: "Filha de Ogum",
    images: [
      {
        url: "/images/oxossi.png",
        width: 800,
        height: 600,
        alt: "Filha de Ogum - Ajuda Espiritual",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filha de Ogum - Ajuda Espiritual",
    description: "Há mais de 35 anos guiando caminhos. Amarração amorosa, leitura de cartas e libertação espiritual.",
    images: ["/images/oxossi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cinzel.variable} ${lato.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-LM1CN8FQN4" />
      </body>
    </html>
  );
}
