import IntroImage from "@/assets/Introduction.png"
import { cn } from "@/lib/utils"
import { Twinkle_Star as testFont, Fredoka } from "next/font/google"
import Head from "next/head"
import Image from "next/image"
import { ReactNode } from "react"
import styles from "./page.module.css"
import HeroImage from "@/assets/HeroImage.png"
import { Button } from "@/components/ui/button"
import localFont from "next/font/local"

const marelle2 = localFont({
  // src: "../../assets/fonts/MarelleBaton2-Regular.woff2",
  src: "../../assets/fonts/Marelle2-Regular.woff2",
  weight: "200",
})

const heroHeadingFont = testFont({ weight: "400" })
const fredoka = Fredoka()

export default function Page() {
  return (
    <>
      <Head>
        <title>
          Kidzee Doddakammanahalli | Best Preschool and Playschool in
          Doddakammanahalli, Bangalore
        </title>
        <meta
          name="description"
          content="Kidzee Doddakammanahalli is a trusted preschool and playschool in Doddakammanahalli, Bangalore. Offering Playgroup, Nursery, Kindergarten and Daycare backed by the award-winning Péntemind curriculum."
        />
      </Head>
      <Hero />
      {/* <Intro /> */}
    </>
  )
}

const Hero = () => (
  <div className={cn("grid place-items-center md:grid-cols-2", "gap-8")}>
    <div className="flex flex-col gap-4">
      <p
        className={cn(
          "uppercase",
          "animateFadeIn",
          // "text-xs"
          styles.preTitleText
        )}
      >
        India's most trusted preschool network
      </p>
      <div>
        <h1
          className={cn(
            "tracking-wider text-primary",
            "font-extralight",
            // heroHeadingFont.className
            marelle2.className,
            styles.titleH1Text
          )}
        >
          <span className="animateFadeIn delay1">Build </span>
          <span className="animateFadeIn delay2">a </span>
          <span className={cn("animateFadeIn delay3")}>
            <span>Foundation</span>
          </span>
        </h1>
        <h2
          className={cn(
            fredoka.className,
            "font-bold text-primary uppercase",
            styles.subTitleH2Text
          )}
        >
          <span className="animateFadeIn delay4">For a </span>
          <span className="animateFadeIn delay5">lifetime </span>
          <span className="animateFadeIn delay6">of </span>
          <span className="animateFadeIn delay7">learning</span>
        </h2>
      </div>
      <p
        className={cn(
          "animateFadeIn delay8",
          "text-balance",
          styles.bannerContent
        )}
      >
        <strong>Kidzee Doddakammanahalli</strong> gives children{" "}
        <strong>aged 2 to 6</strong> a strong, joyful start to their learning
        journey.
      </p>
      <Button
        variant={"orangePrimary"}
        size={"lg"}
        className={cn(
          "rounded-4xl",
          "animateSlideIn delay9",
          styles.bannerButton
        )}
      >
        Contact Us
      </Button>
    </div>
    {/* <div className={cn("flex", "animateSlideIn delay10")}> */}
    {/*   <div className="flex flex-col justify-around"> */}
    {/*     <HeroStat */}
    {/*       stat={"11 years"} */}
    {/*       message={"of experience"} */}
    {/*       className={cn("translate-x-5")} */}
    {/*     /> */}
    {/*     <HeroStat */}
    {/*       stat={"1000+"} */}
    {/*       message={"students taught"} */}
    {/*       className={cn("-translate-x-2")} */}
    {/*     /> */}
    {/*     <HeroStat */}
    {/*       stat={"1000+"} */}
    {/*       message={"students taught"} */}
    {/*       className={cn("-translate-x-1")} */}
    {/*     /> */}
    {/*     <HeroStat */}
    {/*       stat={"364+"} */}
    {/*       message={"5 star reviews"} */}
    {/*       className={cn("translate-x-8")} */}
    {/*     /> */}
    {/*   </div> */}
    {/*   <Image */}
    {/*     src={HeroImage} */}
    {/*     alt={"Hero Section Image"} */}
    {/*     className={cn("aspect-square", "h-50 w-50 xsm:h-70 xsm:w-70")} */}
    {/*   /> */}
    {/* </div> */}
  </div>
)
type HeroStatProps = {
  stat: string
  message: string
  className: string
}
const HeroStat = ({ stat, message, className }: HeroStatProps) => (
  <div className={cn(className)}>
    <div>
      <p className={cn("min-w-max text-center font-black")}>{stat}</p>
      <p className={cn("min-w-max text-center", "text-xs")}>{message}</p>
    </div>
  </div>
)

const Intro = () => (
  <section className="flex flex-col items-center lg:flex-row lg:justify-center">
    <Image
      src={IntroImage}
      alt={"Introduction Image"}
      className="animateSlideIn delay10 w-sm grow-0 md:w-md lg:w-lg"
    />
    <div className="flex flex-col gap-3 lg:w-3xl">
      <IntroPara
        h3="Kidzee Pre-school"
        animationClassName={"animateSlideIn delay11"}
      >
        Kidzee Pre-school is a leading chain of Pre-schools located in India and
        Nepal backed by Zee Learn Limited. With more than two decades of
        experience in the Pre-school industry, Kidzee has nurtured more than
        1.5m+ children throughout India. Being one of the largest Pre-schools in
        India. Kidzee has 2,500+ centers in 600+ cities in India and Nepal.
      </IntroPara>
      <IntroPara
        h3="Kidzee Advantage"
        animationClassName={"animateSlideIn delay12"}
      >
        <p>
          Kidzee is a leader and a trendsetter in Early Childhood Care and
          Education (ECCE). Our business partners’ passion and drive are vital
          for our brand’s success.
        </p>

        <p>
          Our Business Partners don't just take the name, they also take our
          pedagogy- Péntemind, guidelines to teach, prescribes books/plays to be
          followed and so on to the ground.
        </p>

        <p>
          Starting a Pre-school requires a strategic researching, planning,
          designing, and organising. Kidzee Professional research, makes this
          journey easier and rewarding for all our Business Partners.
        </p>

        <p>
          Secret to Success is Service and Support. We provide pre-opening and
          operational support apart from the regular support that is given
          additional to all systems and process.
        </p>
      </IntroPara>
    </div>
  </section>
)
type IntroParaType = {
  h3: string
  animationClassName: string
  children: ReactNode
}
const IntroPara = ({ h3, animationClassName, children }: IntroParaType) => (
  <>
    <h3
      className={cn(
        "mb-1 text-xl font-semibold tracking-tight text-primary uppercase",
        animationClassName
      )}
    >
      {h3}
    </h3>
    <div className={animationClassName}>{children}</div>
  </>
)

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="rounded bg-yellow-100 px-1 text-yellow-800">{children}</span>
)
