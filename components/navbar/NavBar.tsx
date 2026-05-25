import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Contact, History, Home } from "@hugeicons/core-free-icons"
import styles from "./Navbar.module.css"
import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-10 my-4 flex w-screen justify-center gap-4 md:top-0 md:bottom-auto"
      )}
    >
      <Card className="rounded-4xl p-0">
        <div
          className={cn(
            "z-10 flex overflow-hidden rounded-4xl",
            "backdrop-blur-2xl after:scale-85 after:rounded-4xl after:bg-background/80 after:opacity-60 after:transition-all after:duration-500 dark:after:bg-accent-foreground/20",
            styles.buttonGroup
          )}
        >
          <NavItem page="Home" icon={Home} />
          <NavItem page="History" icon={History} />
          <NavItem page="Contact" icon={Contact} />
        </div>
      </Card>
      {/* <DarkModeToggle /> */}
    </nav>
  )
}

export default Navbar
