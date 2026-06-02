import { cn } from "@/lib/utils"
import styles from "./page.module.css"
import Image from "next/image"
import IntoImage from "@/assets/Introduction.png"
import { ReactNode } from "react"
import Head from "next/head"
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
      <Intro />
    </>
  )
}

const Hero = () => (
  <>
    <h1 className="px-2 text-center text-4xl font-extrabold tracking-tighter text-balance uppercase max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
      <span className="animateFadeIn delay1">Build </span>
      <span className="animateFadeIn delay2">a </span>
      <span className={cn("animateFadeIn delay3")}>
        <span
          className={cn(
            "bg-linear-to-r from-primary via-(--yellow) to-primary bg-clip-text text-transparent",
            styles.animatedGradient
          )}
        >
          foundation
        </span>
      </span>
    </h1>
    <h2 className="px-2 text-center text-2xl font-bold tracking-tighter text-balance uppercase max-lg:font-medium max-sm:px-4 sm:text-3xl lg:text-4xl xl:text-6xl">
      <span className="animateFadeIn delay4 text-muted-foreground">for a </span>
      <span className="animateFadeIn delay5 text-accent">lifetime </span>
      <span className="animateFadeIn delay6 text-muted-foreground">of </span>
      <span className="animateFadeIn delay7 text-accent">learning</span>
    </h2>
  </>
)

const Intro = () => (
  <section className="flex flex-col items-center lg:flex-row lg:justify-center">
    <Image
      src={IntoImage}
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
          pedagogy- PéNTEMiND, guidelines to teach, prescribes books/plays to be
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
