import { Nunito } from "next/font/google"

import NavBar from "@/components/navbar/NavBar"
import { cn } from "@/lib/utils"
import "./globals.css"
// import AppThemeProvider from "@/components/app-theme-provider"
import KidzeeLogo from "@/components/assets/KidzeeLogo"
import { Metadata } from "next"
import styles from "./layout.module.css"

const nunito = Nunito()

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
      <body className="max-w-dvw pb-20 xsm:pb-5">
        <div className={cn(styles.background, "fixed top-0 left-0")} />
        {/* <AppThemeProvider> */}
        <NavBar />
        <KidzeeLogo
          className={cn("mx-auto mt-8", "md:fixed md:ml-8", styles.kidzeeLogo)}
          textCss={cn(
            // "md:-mt-4 md:text-[7px]", "lg:-mt-3 lg:text-[9px]",
            styles.kidzeeLogoText
          )}
        />
        <div className={cn("p-6", styles.appContainer)}>{children}</div>
        {/* </AppThemeProvider> */}
      </body>
    </html>
  )
}
