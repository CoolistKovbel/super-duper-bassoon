import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ektoro Park",
  description: "Join and help build a warming community, cleaning up parks and making it fun again",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MainHeader />
        {children}
        </body>
    </html>
  );
}
