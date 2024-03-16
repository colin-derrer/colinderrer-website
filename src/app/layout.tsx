import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Github, Newspaper, FileText, Atom, Linkedin } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-zinc-900 antialiased`}>
        <nav className=" bg-zinc-900/20 sticky top-0 z-40 w-full backdrop-blur-sm border-b h-12 border-zinc-200/40 flex items-center justify-center">
          <ul className="flex justify-end gap-6 text-lg px-8 w-full items-center">
            <li className="mr-auto">
              <Link
                href={"/"}
                className="text-sm flex gap-1 items-center hover:opacity-50 transition-all"
              >
                <Atom className="size-6" />
                CD
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/colin-derrer"}
                className="text-sm flex gap-1 items-center hover:opacity-50 transition-all"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/colin-derrer/"}
                className="text-sm flex gap-1 items-center hover:opacity-50 transition-all"
              >
                LinkedIn
              </Link>
            </li>
            {/* <li>
              <Link
                href={"/articles"}
                className="flex gap-1 items-center hover:opacity-50 transition-all"
              >
                <Newspaper />
                Articles
              </Link>
            </li> */}
            <li>
              <Link
                href={"/Colin Derrer resume.pdf"}
                className="text-sm flex gap-1 items-center hover:opacity-50 transition-all"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="px-8 font-mono mx-auto mt-auto text-white/50 h-12 flex flex-col my-4 text-sm">
          <p>Colin Derrer (C) 2023</p>
          <p>Version 0.0.1 - Updated 2024.16.3</p>
        </footer>
      </body>
    </html>
  );
}
