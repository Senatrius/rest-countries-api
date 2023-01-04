"use client";

import React, { useState } from "react";
import { Nunito_Sans } from "@next/font/google";
import "../styles/globals.css"
import { Header } from "../components/Header";

const NunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ["300", "600", "800"]
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<string>('dark');

  return <html lang="en" className={`${NunitoSans.className} ${theme}`}>
    <head />
    <body className="text-lightText bg-lightBackground dark:bg-darkBackground dark:text-white">
      <Header theme={theme} setTheme={setTheme}/>
      {children}
    </body>
  </html>
}