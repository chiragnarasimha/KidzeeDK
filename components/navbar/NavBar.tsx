import { cn } from "@/lib/utils"
import {
  AiBrain01FreeIcons,
  Contact,
  InformationCircleFreeIcons,
  MapingFreeIcons,
  ProgrammingFlagFreeIcons,
} from "@hugeicons/core-free-icons"
import { KidzeeLogo } from "../assets/SvgAssets"
import styles from "./Navbar.module.css"
import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <>
      <KidzeeLogo
        className={cn(
          "fixed top-6 left-[50%] z-20 translate-x-[-50%]",
          "md:top-6 md:left-6 md:w-24 md:translate-x-0",
          "lg:w-30"
        )}
        textCss={cn("md:-mt-4 md:text-[7px]", "lg:-mt-3 lg:text-[9px]")}
      />
      <nav
        className={cn(
          "fixed bottom-0 left-0 z-10 flex w-screen justify-center gap-4 md:top-5 md:bottom-auto"
        )}
      >
        <div
          className={cn(
            "z-10 flex w-full flex-row justify-around bg-background shadow-md ring-foreground/10 md:w-auto md:rounded-xl md:bg-card/20 md:backdrop-blur-2xl",
            "ring-1 after:scale-85 after:rounded-xl after:bg-foreground/20 after:opacity-60 after:transition-all after:duration-500",
            styles.buttonGroup
          )}
        >
          <NavItem page="About" icon={InformationCircleFreeIcons} />
          <NavItem page="Programs" icon={ProgrammingFlagFreeIcons} />
          <NavItem page="Pentemind" icon={AiBrain01FreeIcons} />
          <NavItem page="Contact" icon={Contact} />
          <NavItem page="Location" icon={MapingFreeIcons} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
