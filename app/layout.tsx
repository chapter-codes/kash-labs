import type { Metadata } from "next";
import { Poppins, Open_Sans, Mulish } from "next/font/google";
import localFont from "next/font/local";

//
import "./globals.css";
import Header from "@/components/home/server/Header";
import Footer from "@/components/home/server/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"], // Add the desired font weights as needed
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["700"], // Add the desired font weights as needed
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400"], // Add the desired font weights as needed
});

const ClashDisplay = localFont({
  variable: "--font-clash-display",
  src: [
    {
      path: "./fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const setInitialTheme = `
  //   (function() {
  //     const storedTheme = localStorage.getItem('theme');
  //     // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     const theme = storedTheme || ''
  //     document.documentElement.classList.add(theme);
  //   })()
  // `;
  // dangerouslySetInnerHTML={{ __html: setInitialTheme }}
  return (
    <html lang="en" className=" m-0 p-0">
      <head>
        <title>KashLabs | Home</title>
        <link rel="icon" href="/icons/logo.svg" />
      </head>
      <body
        className={`${poppins.variable} ${ClashDisplay.variable} ${openSans.variable} ${mulish.variable} antialiased bg-background font-poppins `}
      >
        {/* <LoadTheme /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
