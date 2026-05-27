import { Geist_Mono, Inter } from "next/font/google"

import NavBar from "@/components/navbar/NavBar"
import { cn } from "@/lib/utils"
import "./globals.css"
// import AppThemeProvider from "@/components/app-theme-provider"
import styles from "./layout.module.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="overflow-hidden">
        <div className={cn(styles.background, "fixed top-0 left-0")} />
        {/* <AppThemeProvider> */}
        <NavBar />
        <div className="h-dvh overflow-y-auto">
          <div className="my-28">{children}</div>
        </div>
        {/* </AppThemeProvider> */}
      </body>
    </html>
  )
}

{
  /* <AppThemeProvider> */
}
{
  /*   <NavBar /> */
}
{
  /*   <div className="my-28">{children}</div> */
}
{
  /* </AppThemeProvider> */
}
