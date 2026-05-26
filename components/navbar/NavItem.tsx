"use client"
import { cn } from "@/lib/utils"
import { HugeiconsIcon, HugeiconsIconProps } from "@hugeicons/react"
import { usePathname, useRouter } from "next/navigation"
import styles from "./Navbar.module.css"

type GroupItemProps = {
  page: string
  icon: HugeiconsIconProps["icon"]
}
const NavItem = ({ page, icon }: GroupItemProps) => {
  const id = `nav-button-${page}`
  const router = useRouter()
  const pathname = usePathname()
  const pageLowerCase = page.toLocaleLowerCase()
  const defaultChecked = pathname.includes(pageLowerCase)
  return (
    <label
      htmlFor={id}
      className={cn(
        "z-10 h-max items-center border-0 bg-none py-2 duration-500",
        /* Position relative is needed because the parent is rendering an after pseudo element with position relative. We want to make sure that the buttons will render on top of the pseudo element*/
        "relative"
      )}
      onClick={() => router.push(pageLowerCase)}
    >
      <input
        type="radio"
        id={id}
        className={cn("absolute top-0 left-0 h-full w-full opacity-0", {
          [styles["anchorName"]]: defaultChecked,
        })}
        name="nav-button"
        // defaultChecked={pathname.includes(pageLowerCase)}
      />

      <div className="flex h-14 min-w-16 flex-col items-center justify-center px-3 md:h-10 md:flex-row">
        <HugeiconsIcon icon={icon} className={"[&svg]:w-5 md:[&svg]:w-5"} />
        <span className="text-xs">{page}</span>
      </div>
    </label>
  )
}

export default NavItem
