import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Tejas Bhurbhure - Portfolio | Codédex Challenge",
  description: "Pixel-perfect portfolio showcasing my projects and skills. Built for the Codédex Monthly Challenge (October 2025). Level 3 Developer with 323 XP!",
  keywords: ["portfolio", "developer", "codedex", "web development", "projects"],
  authors: [{ name: "Tejas Bhurbhure" }],
  openGraph: {
    title: "Tejas Bhurbhure - Portfolio",
    description: "Check out my pixel-perfect portfolio!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${pressStart.variable} ${vt323.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
