import { Geist_Mono, Inter } from "next/font/google"

import NavBar from "@/components/navbar/NavBar"
import { cn } from "@/lib/utils"
import "./globals.css"
import AppThemeProvider from "@/components/app-theme-provider"
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
      {/* <body className="bg-[#EBE1FF]"> */}
      <body>
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-0",
              styles.background
            )}
          />
          <AppThemeProvider>
            <NavBar />
            {children}
          </AppThemeProvider>
        </div>
      </body>
    </html>
  )
}
