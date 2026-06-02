"use client"
import { cn } from "@/lib/utils"
import styles from "./hamburger-menu-button.module.css"

import { forwardRef, useImperativeHandle, useState } from "react"
type Props = { className?: string }

export type HamburgerMenuButtonHandle = {
  setIsClicked: (value: boolean) => void
}

export const HamburgerMenuButton = forwardRef<HamburgerMenuButtonHandle, Props>(
  ({ className }, ref) => {
    const [isClicked, setIsClicked] = useState(false)
    useImperativeHandle(ref, () => ({
      setIsClicked,
    }))

    return (
      <svg
        viewBox="0 0 100 100"
        className={cn(
          "w-full self-center",

          styles.svg,
          className
        )}
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <path
          className={cn(styles.line, styles.top, {
            "stroke-foreground": !isClicked,
            "stroke-red-400": isClicked,
            [styles.topTransform]: isClicked,
          })}
          d="M 20,30 H 80"
        />
        <path
          className={cn(styles.line, styles.middle, {
            "stroke-foreground": !isClicked,
            "stroke-red-400": isClicked,
            [styles.middleTransform]: isClicked,
          })}
          d="M 20,50 H 80"
        />
        <path
          className={cn(styles.line, styles.bottom, {
            "stroke-foreground": !isClicked,
            "stroke-red-400": isClicked,
            [styles.bottomTransform]: isClicked,
          })}
          d="M 20,70 H 80"
        />
      </svg>
    )
  }
)
HamburgerMenuButton.displayName = "HamburgerMenuButton"
