import type { Metadata } from "next";
import localFont from "next/font/local";
import ReduxProvider from "@/context/ReduxProvider"; // Import the client component
import "./globals.css";

const geistJost = localFont({
  src: "../fonts/Jost-VariableFont_wght.ttf",
  variable: "--font-geist-jost",
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
      <body className={`${geistJost.variable} antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
