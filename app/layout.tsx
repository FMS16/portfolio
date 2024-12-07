import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";
import Transition from "./components/Transition";
import { Limelight } from 'next/font/google';
import { Metadata } from 'next'
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

export const metadata:Metadata = {
  title: "Fabricio Secondo",
  description: "Portfolio of Fabricio Secondo, a graduated developer from Uruguay.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sfBold.variable} ${sf.variable} ${limelight.variable} antialiased`}>
        <Header />
        <Transition>
          {children}
        </Transition>
      </body>
    </html>
  );
}
