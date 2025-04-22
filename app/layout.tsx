import type { Metadata } from "next";
import { Inter, Lato, Mulish, Syne, Raleway } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import BackToTop from '@/components/BackToTop';
import AOSInit from '@/components/AOSInit';

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
  preload: true,
});

const lato = Lato({
  variable: "--font-lato",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

const mulish = Mulish({
  variable: "--font-mulish",
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

const syne = Syne({
  variable: "--font-syne",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ATC Tech | Technology Consulting, Training & Digital Solutions",
  description: "Expert technology consulting, training, and digital solutions for businesses. We provide custom software development, cloud solutions, digital transformation, and IT consulting services.",
  keywords: "technology consulting, digital solutions, custom software development, cloud solutions, digital transformation, IT consulting, tech training, web development, AI ML solutions, cyber security",
  authors: [{ name: "ATC Tech" }],
  creator: "ATC Tech",
  publisher: "ATC Tech",
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png' },
    ],
    shortcut: '/favicon.png',
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://atc.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ATC Tech | Technology Consulting & Digital Solutions",
    description: "Empowering innovation and building digital success with expert technology consulting, training, and digital solutions for businesses.",
    url: 'https://atc.co.uk',
    siteName: 'ATC Tech',
    images: [
      {
        url: '/header-bg.png',
        width: 1200,
        height: 630,
        alt: 'ATC Tech - Technology Consulting & Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ATC Tech | Technology Consulting & Digital Solutions",
    description: "Empowering innovation and building digital success with expert technology consulting, training, and digital solutions.",
    images: ['/header-bg.png'],
    creator: '@atctech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} ${mulish.variable} ${syne.variable} ${raleway.variable} bg-[#FFF5F5]`}
      >
        <AOSInit />
        <Topbar />
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
