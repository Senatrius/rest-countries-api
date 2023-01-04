import React from "react";
import { Nunito_Sans } from "@next/font/google";
import "../styles/globals.css"
import { WidthContainer } from "./WidthContainer";

const NunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ["300", "600", "800"]
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en" className={`${NunitoSans.className}`}>
    <head />
    <body>
      <WidthContainer>Hi</WidthContainer>
      {children}
    </body>
  </html>
}