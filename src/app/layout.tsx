import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Github, Newspaper, FileText, Atom, Linkedin } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const manrope = Manrope({ subsets: ["latin"] });

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
        className={`${manrope.className}  antialiased flex flex-col items-center mx-4`}
      >
        <nav className="max-w-[1400px] sticky top-0 z-40 flex items-center justify-center w-full h-12 border-b backdrop-blur-sm">
          <ul className="flex items-center justify-end w-full gap-6 px-4 text-lg">
            <li className="mr-auto">
              <Link
                href={"/"}
                className="gap-1 text-sm transition-all hover:opacity-50"
              >
                colin.
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/colin-derrer"}
                className="gap-1 text-sm transition-all hover:opacity-50"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/colin-derrer/"}
                className="gap-1 text-sm transition-all hover:opacity-50"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={"/Colin Derrer resume.pdf"}
                className="gap-1 text-sm transition-all hover:opacity-50"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
        <main className="w-full max-w-[1400px] ">{children}</main>
        <footer className="w-full max-w-[1400px] flex justify-between px-4 items-end py-4 h-32 mt-16 bg-foreground text-background rounded-t-sm relative overflow-clip">
          <p className="z-10 font-mono tracking-tighter">
            Colin Derrer (C) 2023
          </p>
          <svg className="absolute w-[40%] bottom-0 right-[-50px]">
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="148.76"
              y="133.978"
              width="210.686"
              height="213.854"
              transform="rotate(-45 148.76 133.978)"
              fill="#282828"
            />
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="264"
              y="170.217"
              width="210.686"
              height="213.854"
              transform="rotate(-45 264 170.217)"
              fill="#282828"
            />
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="72"
              y="194.217"
              width="210.686"
              height="210.686"
              transform="rotate(-45 72 194.217)"
              fill="#717171"
            />
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="319"
              y="150.921"
              width="124"
              height="124"
              transform="rotate(-45 319 150.921)"
              fill="#787878"
            />
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="208"
              y="158.602"
              width="134.863"
              height="134.863"
              transform="rotate(-45 208 158.602)"
              fill="#E4E4E4"
            />
          </svg>
        </footer>
      </body>
    </html>
  );
}
