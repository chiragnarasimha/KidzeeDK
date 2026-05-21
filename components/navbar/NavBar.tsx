import { KidzeeLogo } from "@/assets/SvgAssets"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"

const NavBar = () => {
  return (
    <nav>
      <KidzeeLogo
        // className="h-44 w-3xl"
        fillCss="fill-[#65318E]"
        borderCss="fill-[#FFF200]"
        className="fixed"
      />
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

export default NavBar
