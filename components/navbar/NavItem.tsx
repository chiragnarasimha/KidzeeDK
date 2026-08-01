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
  const defaultChecked = pathname !== "" && pathname.includes(pageLowerCase)
  const handleClick = () => router.push(pageLowerCase)
  return (
    <label
      htmlFor={id}
      className={cn(
        "z-10 h-max items-center border-0 bg-none py-2 duration-500",
        /* Position relative is needed because the parent is rendering an after pseudo element with position relative. We want to make sure that the buttons will render on top of the pseudo element*/
        "relative"
      )}
    >
      <input
        type="radio"
        id={id}
        className={cn("absolute top-0 left-0 h-full w-full opacity-0", {
          [styles["anchorName"]]: defaultChecked,
        })}
        name="nav-button"
        onClick={handleClick}
      />

      <div className="flex h-14 flex-col items-center justify-center px-3 md:h-10 md:flex-row md:gap-1 md:px-2 lg:h-12 lg:w-24 xl:h-12 xl:w-30">
        <HugeiconsIcon
          icon={icon}
          className={"[&svg]:w-5 md:[&svg]:w-4 lg:[&svg]:w-5"}
          color={defaultChecked ? "#612595" : ""}
        />
        <span
          className={cn("text-xs", { [styles["activeText"]]: defaultChecked })}
        >
          {page}
        </span>
      </div>
    </label>
  )
}

export default NavItem
