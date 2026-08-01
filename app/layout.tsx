import NavBar from "@/components/navbar/NavBar"
import { cn } from "@/lib/utils"
import { Nunito } from "next/font/google"
import "./globals.css"
// import AppThemeProvider from "@/components/app-theme-provider"
import DOODLE_BR from "@/assets/doodles/doodle_br.png"
import DOODLE_MBL from "@/assets/doodles/doodle_mbl.png"
import DOODLE_MTR from "@/assets/doodles/doodle_mtr.png"
import DOODLE_TL from "@/assets/doodles/doodle_tl.png"
import DOODLE_TR from "@/assets/doodles/doodle_tr.png"
import KidzeeLogo from "@/components/assets/KidzeeLogo"
import { Metadata } from "next"
import Image from "next/image"
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
      <body className="xsm:pb-5">
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
        <div className="mb-128"></div>
      </body>
    </html>
  )
}

const Background = () => {
  const sharedCss = cn(
    "h-16 w-16 opacity-75",
    "md:h-24 md:w-24",
    "lg:h-32 lg:w-32"
  )

  return (
    <div className={cn(styles.background, "fixed top-0 left-0")}>
      <div
        className={cn(styles.magicpattern, "fixed top-0 left-0 h-dvh w-dvw")}
      />
      <div className="flex h-full w-full justify-between">
        <Image
          src={DOODLE_TL}
          alt={"Background Doodle 4"}
          className={cn(sharedCss, "translate-y-[20dvh]")}
        />
        <Image
          src={DOODLE_MBL}
          alt={"Background Doodle 2"}
          className={cn(sharedCss, "translate-y-[80dvh]")}
        />
        <Image
          src={DOODLE_MTR}
          alt={"Background Doodle 3"}
          className={cn(sharedCss, "translate-y-[40dvh]")}
        />
        <Image
          src={DOODLE_TR}
          alt={"Background Doodle 5"}
          className={cn(sharedCss, "translate-y-[12dvh]")}
        />
        <Image
          src={DOODLE_BR}
          alt={"Background Doodle 1"}
          className={cn(sharedCss, "translate-y-[67dvh]")}
        />
      </div>
    </div>
  )
}
