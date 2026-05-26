"use client"
import { cn } from "@/lib/utils"
import { Cloud, Moon02Icon, Star, Sun } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import styles from "./dark-theme-toggle.module.css"

type Props = {
  className?: string
}
const DarkModeToggle = ({ className }: Props) => {
  const { setTheme, theme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    setIsDarkTheme(theme === "dark")
  }, [theme])

  return (
    <label
      htmlFor="dark-mode-toggle"
      className={cn(
        `z-50 flex items-center justify-center overflow-hidden`,
        styles.labelContainer,
        className
      )}
    >
      <input
        className={cn("h-0 w-0", styles.checkbox)}
        type={"checkbox"}
        onChange={() => {
          if (isDarkTheme) {
            setTheme("light")
          } else {
            setTheme("dark")
          }
        }}
        id="dark-mode-toggle"
        aria-label="Toggle dark mode"
      />
      <div
        className={cn(
          "relative flex w-20 cursor-pointer rounded-4xl bg-background/20 p-1 transition-all duration-500"
        )}
      >
        <HugeiconsIcon
          icon={Moon02Icon}
          className={cn("absolute fill-[#FFF] transition-all duration-500", {
            "left-1 opacity-100": isDarkTheme,
            "left-8/12 border-0 stroke-0 opacity-0": !isDarkTheme,
          })}
        />
        <div
          className={cn("absolute left-9 h-full transition-all duration-500", {
            "-top-8 opacity-0": !isDarkTheme,
            "top-1 opacity-100": isDarkTheme,
          })}
        >
          <HugeiconsIcon
            icon={Star}
            className="absolute top-0.5 left-3 h-3/12 fill-amber-500"
          />
          <HugeiconsIcon
            icon={Star}
            className="absolute top-0.5 h-6/12 fill-amber-500"
          />
          <HugeiconsIcon
            icon={Star}
            className="absolute top-2 left-4 h-5/12 fill-amber-500"
          />
        </div>

        <HugeiconsIcon
          icon={Sun}
          className={cn("absolute fill-amber-400 transition-all duration-500", {
            "left-1 opacity-0": isDarkTheme,
            "left-8/12": !isDarkTheme,
          })}
        />
        <div
          className={cn("absolute h-full transition-all duration-500", {
            "top-8 opacity-0": isDarkTheme,
            "top-1 opacity-100": !isDarkTheme,
          })}
        >
          <HugeiconsIcon
            icon={Cloud}
            className="absolute top-0.5 left-3 h-4/12 fill-white"
          />
          <HugeiconsIcon
            icon={Cloud}
            className="absolute top-0.5 h-7/12 fill-white"
          />
          <HugeiconsIcon
            icon={Cloud}
            className="absolute top-2 left-4 h-6/12 fill-white"
          />
        </div>

        {/* Hidden icon so that the container height is correct */}
        <HugeiconsIcon icon={Sun} className="opacity-0" />
      </div>
    </label>
  )
}
export default DarkModeToggle
