import type { Metadata } from "next";
import { Header } from "./layout/Header";
import localFont from "next/font/local";
import clsx from "clsx";

const neueMontreal = localFont({
  src: "./fonts/ppneuemontreal-book.otf",
});

import "./globals.css";

export const metadata: Metadata = {
  title: "STEMPS | Paginator",
  description: "Test task with paginator",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={clsx("flex-col flex min-h-screen", neueMontreal.className)}
      >
        <Header />
        <main className="grow px-4 pt-[7px] lg:pt-0 flex flex-col gap-10">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
