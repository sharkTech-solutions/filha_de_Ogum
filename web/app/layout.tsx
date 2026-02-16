import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
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
      </body>
    </html>
  );
}
