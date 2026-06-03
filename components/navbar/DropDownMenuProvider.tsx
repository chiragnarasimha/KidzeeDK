"use client"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ReactNode, useRef } from "react"
import {
  HamburgerMenuButton,
  HamburgerMenuButtonHandle,
} from "../customUi/hamburger-menu-button"

type Props = {
  children: ReactNode
}

export const DropDownMenuProvider = ({ children }: Props) => {
  const hamburgerButtonHandle = useRef<HamburgerMenuButtonHandle>(null)
  return (
    <DropdownMenu
      onOpenChangeComplete={(open) => {
        hamburgerButtonHandle.current?.setIsClicked(open)
      }}
    >
      <div className="flex w-full justify-center">
        <DropdownMenuTrigger>
          <HamburgerMenuButton ref={hamburgerButtonHandle} />
        </DropdownMenuTrigger>
      </div>
      {children}
    </DropdownMenu>
  )
}

export default DropDownMenuProvider
