import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  AiBrain01FreeIcons,
  Contact,
  History,
  Home,
  InformationCircleFreeIcons,
  MapingFreeIcons,
  ProgrammingFlagFreeIcons,
} from "@hugeicons/core-free-icons"
import styles from "./Navbar.module.css"
import NavItem from "./NavItem"
import { KidzeeLogo } from "@/assets/SvgAssets"

const Navbar = () => {
  return (
    <>
      <KidzeeLogo className="fixed z-20" />
      <nav
        className={cn(
          "fixed bottom-0 left-0 z-10 my-6 flex w-screen justify-center gap-4 md:top-0 md:bottom-auto"
        )}
      >
        <Card className="rounded-4xl p-0">
          <div
            className={cn(
              "z-10 flex overflow-hidden rounded-4xl",
              "backdrop-blur-2xl after:scale-85 after:rounded-4xl after:bg-foreground/20 after:opacity-60 after:transition-all after:duration-500",
              styles.buttonGroup
            )}
          >
            <NavItem page="About" icon={InformationCircleFreeIcons} />
            <NavItem page="Programs" icon={ProgrammingFlagFreeIcons} />
            <NavItem page="Pentemind" icon={AiBrain01FreeIcons} />
            <NavItem page="Contact" icon={Contact} />
            <NavItem page="Location" icon={MapingFreeIcons} />
          </div>
        </Card>
      </nav>
    </>
  )
}

export default Navbar
