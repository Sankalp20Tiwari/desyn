import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";



const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight:['400','700']
});


export const metadata: Metadata = {
  title: "Desyn",
  description: "A modern, collaborative design tool for seamless UI/UX creation. Design, prototype, and collaborate effortlessly in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} font-comic bg-primary-grey-200 antialiased`}
      >
        <Room>
        {children}
        </Room>
      </body>
    </html>
  );
}
