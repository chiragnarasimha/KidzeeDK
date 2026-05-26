import { Geist_Mono, Inter } from "next/font/google"

import NavBar from "@/components/navbar/NavBar"
import { cn } from "@/lib/utils"
import "./globals.css"
import AppThemeProvider from "@/components/app-theme-provider"

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
      <body className="p-6">
        <AppThemeProvider>
          <NavBar />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
