import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pacific Movement - Fotografia Profissional",
  description: "Estúdio de fotografia especializado em ensaios individuais, gestantes, corporativo e retratos de emoção. Pacotes a partir de R$ 649,00",
  keywords: ["fotografia", "ensaio fotográfico", "gestantes", "corporativo", "retratos", "estúdio fotográfico"],
  authors: [{ name: "Pacific Movement" }],
  metadataBase: new URL('https://pacific-cyan.vercel.app'),
  icons: {
    icon: "/fotos/Símbolo Bege (sem fundo).png",
    apple: "/fotos/Símbolo Bege (sem fundo).png",
    shortcut: "/fotos/Símbolo Bege (sem fundo).png",
  },
  openGraph: {
    title: "Pacific Movement - Fotografia Profissional",
    description: "Estúdio de fotografia especializado em ensaios individuais, gestantes, corporativo e retratos de emoção.",
    url: "https://pacificmovement.com",
    siteName: "Pacific Movement",
    images: [
      {
        url: "/fotos/IMG_6776 copiar.jpg",
        width: 1200,
        height: 630,
        alt: "Pacific Movement Fotografia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Movement - Fotografia Profissional",
    description: "Estúdio de fotografia especializado em ensaios individuais, gestantes, corporativo e retratos de emoção.",
    images: ["/fotos/IMG_6776 copiar.jpg"],
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
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
