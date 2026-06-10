import { Nunito } from "next/font/google"

import NavBar from "@/components/navbar/NavBar"
import { cn } from "@/lib/utils"
import "./globals.css"
// import AppThemeProvider from "@/components/app-theme-provider"
import KidzeeLogo from "@/components/assets/KidzeeLogo"
import { Metadata } from "next"
import styles from "./layout.module.css"

const nunito = Nunito()

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

export const metadata: Metadata = {
  title: "Kidzee Doddakammanahalli",
  description:
    "Kidzee Doddakammanahalli is a trusted preschool and playschool in Doddakammanahalli, Bangalore. Offering Playgroup, Nursery, Kindergarten and Daycare backed by the award-winning Péntemind curriculum.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", nunito.className)}
    >
      <body className="overflow-hidden">
        <div className={cn(styles.background, "fixed top-0 left-0")} />
        {/* <AppThemeProvider> */}
        <NavBar />
        <div className="h-dvh overflow-y-auto">
          <KidzeeLogo
            className={cn(
              "md:w-24 md:translate-x-0 lg:w-30",
              styles.logoContainer
            )}
            textCss={cn("md:-mt-4 md:text-[7px]", "lg:-mt-3 lg:text-[9px]")}
          />
          <div className={cn("p-6", styles.appContainer)}>{children}</div>
        </div>
        {/* </AppThemeProvider> */}
      </body>
    </html>
  )
}
