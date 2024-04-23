import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

const local = localFont({
  src: [
    {
      path: "../../public/Nohemi-Regular.ttf",
      weight: "500",
    },
  ],
  weight: "variable",
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Colin Derrer",
  description: "Colin Derrer's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${local.variable} font-sans antialiased`}
      >
        <nav className="sticky top-0 w-full border-b h-16 px-12 bg-background">
          <div className="mx-auto px-12 flex justify-between items-center max-w-6xl h-full">
            <Link href="/">cd</Link>
            <div className="flex gap-4">
              <Link href="https://twitter.com/ColinDerrer">Twitter</Link>
              <Link href="https://www.linkedin.com/in/colin-derrer/">
                LinkedIn
              </Link>
              <Link href="/Colin Derrer SSE.pdf">Resume</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
