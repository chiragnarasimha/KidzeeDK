import HeroImage from "@/assets/HeroImage.png"
import PreIntroTL from "@/assets/homePage/PreIntroTL.png"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Fredoka } from "next/font/google"
import localFont from "next/font/local"
import Head from "next/head"
import Image from "next/image"
import styles from "./page.module.css"
import { ReactNode } from "react"
import PentemindImage from "@/components/assets/PentemindImage"

const marelle2 = localFont({
  // src: "../../assets/fonts/MarelleBaton2-Regular.woff2",
  src: "../../assets/fonts/Marelle2-Regular.woff2",
  weight: "200",
})

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
      <Banner />
      <PreIntro />
      <Intro />

      {/* <Intro /> */}
    </>
  )
}

const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={cn(
        fredoka.className,
        "font-bold text-primary uppercase",
        styles.subTitleH2Text
      )}
    >
      {children}
    </h2>
  )
}

const P = ({ children }: { children: ReactNode }) => (
  <p className={styles.pContent}>{children}</p>
)

const Banner = () => (
  <div
    className={cn(
      "grid place-items-center md:grid-cols-2",
      "gap-8 md:gap-0",
      styles.bannerContainer
    )}
  >
    <div className={cn("grid place-items-center", styles.bannerTextContainer)}>
      <p
        className={cn(
          "uppercase",
          "animateFadeIn delay3",
          // "text-xs"
          styles.preTitleText
        )}
      >
        India's most trusted preschool network
      </p>
      <div>
        <H2>
          <span className="animateFadeIn delay4">Build </span>
          <span className="animateFadeIn delay5">a </span>
          <span className={cn("animateFadeIn delay6")}>
            <span>Foundation</span>
          </span>
        </H2>
        <h2
          className={cn(
            fredoka.className,
            "font-bold text-primary uppercase",
            styles.subTitleH2Text
          )}
        >
          <span className="animateFadeIn delay7">For a </span>
          <span className="animateFadeIn delay8">lifetime </span>
          <span className="animateFadeIn delay9">of </span>
          <span className="animateFadeIn delay10">learning</span>
        </h2>
      </div>
      <div className={cn("animateFadeIn delay11", styles.bannerContent)}>
        <P>
          <strong>Kidzee Doddakammanahalli</strong> gives children{" "}
          <strong>aged 2 to 6</strong> a strong, joyful start to their learning
          journey.
        </P>
      </div>
      <div className="flex w-full">
        <Button
          variant={"orangePrimary"}
          size={"lg"}
          className={cn(
            // "rounded-4xl md:-translate-x-15",
            "rounded-4xl",
            "animateSlideInFromBottom delay12",
            styles.bannerButton
          )}
        >
          Enquire Now
        </Button>
      </div>
    </div>
    <div className={cn("flex", "animateSlideInFromBottom delay13")}>
      <div className="flex flex-col justify-around">
        <BannerStat
          stat={"11 years"}
          message={"of experience"}
          className={cn(styles.bannerStat1)}
        />
        <BannerStat
          stat={"1001+"}
          message={"students taught"}
          className={cn(styles.bannerStat2)}
        />
        <BannerStat
          stat={"1001+"}
          message={"students taught"}
          className={cn(styles.bannerStat3)}
        />
        <BannerStat
          stat={"365+"}
          message={"6 star reviews"}
          className={cn(styles.bannerStat4)}
        />
      </div>
      <Image
        src={HeroImage}
        alt={"Hero Section Image"}
        className={cn("aspect-square", styles.bannerImage)}
      />
    </div>
  </div>
)
type BannerStatProps = {
  stat: string
  message: string
  className: string
}
const BannerStat = ({ stat, message, className }: BannerStatProps) => (
  <div className={cn(className)}>
    <div>
      <p
        className={cn(
          "min-w-max text-center font-black",
          styles.bannerStatHeading
        )}
      >
        {stat}
      </p>
      <p className={cn("min-w-max text-center", styles.bannerStatContent)}>
        {message}
      </p>
    </div>
  </div>
)

const PreIntro = () => (
  <section className="grid place-items-center pt-24">
    <div className={cn("relative h-full", styles.preIntroContainer)}>
      <Image
        src={PreIntroTL}
        alt={"PreIntroDecoration 2"}
        className="absolute -top-8 -left-8 h-16 w-16"
      />
    </div>
    <Card className={cn("overflow-visible p-7", styles.preIntroContainer)}>
      <p className={cn(styles.preIntroParagraph)}>
        Proudly part of <strong>India's most trusted preschool network.</strong>{" "}
        We blend Kidzee’s award-winning <strong>Péntemind</strong> pedagogy with
        warm, hands-on, play-based learning to give your child the{" "}
        <strong>best start</strong> in life.
      </p>
    </Card>
  </section>
)

const GeneralSection = ({ children }: { children: ReactNode }) => (
  <section className="grid place-items-center pt-24">
    <div className={cn("flex flex-col", styles.sectionContent)}>{children}</div>
  </section>
)

const Intro = () => {
  return (
    <>
      <GeneralSection>
        <H2>Why Kidzee Doddakammanahalli?</H2>
        <div className="flex flex-col items-center justify-center gap-4">
          <P>
            Choosing the right preschool is one of the more important decisions
            parents make in the early years. At Kidzee Doddakammanahalli, we
            take that responsibility seriously. Our centre combines the backing
            of a nationally recognised curriculum with the familiarity and care
            of a local school that is genuinely invested in your child.
          </P>
          <P>
            We follow the Péntemind pedagogy, Kidzee's research-backed learning
            framework that develops five dimensions of the mind: empathetic,
            conscientious, focused, analytical and inventive. Every activity,
            every session and every interaction at our centre is designed with
            your child's overall development in mind.
          </P>
        </div>
      </GeneralSection>
      <div className="grid place-items-center">
        <PentemindImage className="w-[90%] pt-8 md:w-[80%]" />
      </div>
    </>
  )
}
