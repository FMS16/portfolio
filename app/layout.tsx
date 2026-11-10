import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sf = localFont({ src: "./fonts/SF-Pro-Text-Regular.otf", variable: "--font-sf" });
const sfBold = localFont({ src: "./fonts/SF-Pro-Display-Bold.otf", variable: "--font-sf-bold" });

export const metadata: Metadata = {
  title: "Fabricio Secondo | Desarrollador de software",
  description: "La web personal de Fabricio Secondo, desarrollador de software en Montevideo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body className={`${sf.variable} ${sfBold.variable}`}>{children}</body></html>;
}
