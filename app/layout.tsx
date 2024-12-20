import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";
import Transition from "./components/Transition";
import { Limelight } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";

const sfBold = localFont({
  src: "./fonts/SF-Pro-Display-Bold.otf",
  variable: "--font-sf-bold",
  weight: "100 900",
});
const limelight = Limelight({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-limelight',
});
const sf = localFont({
  src: "./fonts/SF-Pro-Text-Regular.otf",
  variable: "--font-sf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fabricio Secondo",
  description: "Portfolio of Fabricio Secondo, programmer analyst from Uruguay.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
    ],
  },
  openGraph: {
    title: "Fabricio Secondo Portfolio",
    description: "Explore the portfolio of Fabricio Secondo, a skilled programmer analyst based in Uruguay.",
    url: "https://www.fsecondo.dev", 
    type: "website",
    images: [
      {
        url: "/preview.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio of Fabricio Secondo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", 
    title: "Fabricio Secondo Portfolio",
    description: "Explore the portfolio of Fabricio Secondo, a skilled programmer analyst based in Uruguay.",
    images: ["/preview.png"], 
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sfBold.variable} ${sf.variable} ${limelight.variable} antialiased`}>
        <Header />
        <Transition>
          {children}
        </Transition>
        <Analytics />
      </body>
    </html>
  );
}
