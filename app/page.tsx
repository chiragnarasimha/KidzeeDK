export default function Page() {
  return (
    <>
      <Hero />
    </>
  )
}

const Hero = () => (
  <>
    <h1 className="px-2 text-center text-4xl font-extrabold tracking-tighter text-balance uppercase max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
      Build a{" "}
      <span className="bg-linear-to-r from-primary via-(--yellow) to-primary bg-clip-text text-transparent">
        foundation
      </span>
    </h1>
    <h2 className="px-2 text-center text-2xl font-extrabold tracking-tighter text-balance uppercase max-lg:font-medium max-sm:px-4 sm:text-3xl lg:text-4xl xl:text-6xl">
      <span className="text-muted-foreground">for a </span>
      <span className="text-accent">life time </span>
      <span className="text-muted-foreground">of </span>
      <span className="text-accent">learning</span>
    </h2>
  </>
)
