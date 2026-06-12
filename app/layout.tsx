import { Nunito } from "next/font/google"

import NavBar from "@/components/navbar/NavBar"
import { cn } from "@/lib/utils"
import "./globals.css"
// import AppThemeProvider from "@/components/app-theme-provider"
import KidzeeLogo from "@/components/assets/KidzeeLogo"
import { Metadata } from "next"
import styles from "./layout.module.css"
import DOODLE_BR from "@/assets/doodles/doodle_br.png"
import DOODLE_MBL from "@/assets/doodles/doodle_mbl.png"
import DOODLE_MTR from "@/assets/doodles/doodle_mtr.png"
import DOODLE_TL from "@/assets/doodles/doodle_tl.png"
import DOODLE_TR from "@/assets/doodles/doodle_tr.png"
import Image from "next/image"

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
      <body className="pb-20 xsm:pb-5">
        <Background />
        {/* <AppThemeProvider> */}
        <NavBar />
        <KidzeeLogo
          className={cn(
            "mx-auto mt-8",
            "md:ml-8",
            styles.kidzeeLogo,
            "animateSlideInFromTop delay2"
          )}
          textCss={cn(styles.kidzeeLogoText)}
        />
        {children}
        {/* </AppThemeProvider> */}
      </body>
    </html>
  )
}

const Background = () => (
  <div className={cn(styles.background, "fixed top-0 left-0")}>
    <div className="flex h-full w-full justify-between">
      <Image
        src={DOODLE_TL}
        alt={"Background Doodle 4"}
        className="h-32 w-32 translate-y-[20dvh]"
      />
      <Image
        src={DOODLE_MBL}
        alt={"Background Doodle 2"}
        className="h-32 w-32 translate-y-[80dvh]"
      />
      <Image
        src={DOODLE_MTR}
        alt={"Background Doodle 3"}
        className="h-32 w-32 translate-y-[40dvh]"
      />
      <Image
        src={DOODLE_TR}
        alt={"Background Doodle 5"}
        className="h-32 w-32 translate-y-[12dvh]"
      />
      <Image
        src={DOODLE_BR}
        alt={"Background Doodle 1"}
        className="h-64 w-64 translate-y-[67dvh]"
      />
    </div>
  </div>
)
