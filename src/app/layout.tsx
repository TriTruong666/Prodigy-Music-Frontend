import type { Metadata } from "next";
import localFont from "next/font/local";
import ReduxProvider from "@/context/ReduxProvider"; // Import the client component
import "./globals.css";

const geistJost = localFont({
  src: "../fonts/Jost-VariableFont_wght.ttf",
  variable: "--font-geist-jost",
  weight: "100 900",
});

const normalPoppins = localFont({
  src: "../fonts/Poppins-Regular.ttf",
  variable: "--font-regular-poppins",
});

const semiboldPoppins = localFont({
  src: "../fonts/Poppins-SemiBold.ttf",
  variable: "--font-semibold-poppins",
});

const lightPoppins = localFont({
  src: "../fonts/Poppins-Light.ttf",
  variable: "--font-light-poppins",
  weight: "300",
});

const manropeFont = localFont({
  src: "../fonts/Manrope-VariableFont_wght.ttf",
  variable: "--manrope",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Prodigy",
  description: "Author TriTruong666",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="prodigy-logo-dark.png" type="image/x-icon" />
      <body
        className={`${geistJost.variable} ${lightPoppins.variable} ${normalPoppins.variable} ${semiboldPoppins.variable} ${manropeFont.variable} antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
