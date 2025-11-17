import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edson Vinicius — Full-stack Engineer",
  description:
    "Portfólio interativo destacando a experiência fullstack de Edson Vinicius em produtos digitais modernos.",
  metadataBase: new URL("https://edsonvinicius.dev"),
  openGraph: {
    title: "Edson Vinicius — Full-stack Engineer",
    description:
      "Projetos, stack e experiência em construir produtos escaláveis com Next.js, Node e cloud.",
    url: "https://edsonvinicius.dev",
    siteName: "Edson Vinicius",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Vinicius — Full-stack Engineer",
    description:
      "Portfólio interativo com projetos, stack e experiência de Edson Vinicius.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-deep-night">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-night text-soft-ice`}
      >
        {children}
      </body>
    </html>
  );
}
