import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

import { TopMenu as MenuItem, type MenuLink } from "../menu-link";

import AppIcon from "./app-icon";

const linkArray: MenuLink[] = [
  {
    href: "#",
    content: "Dashboard",
  },
  {
    href: "#",
    content: "Orders",
  },
  {
    href: "#",
    content: "Products",
  },
  {
    href: "#",
    content: "Customers",
  },
  {
    href: "#",
    content: "Settings",
  },
];

const MenuLinks: React.FC<{ links: MenuLink[] }> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <MenuItem key={index} href={link.href}>
          {link.content}
        </MenuItem>
      ))}
    </>
  );
};

export default function TopMenu() {
  return (
    <>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <AppIcon />
        <MenuLinks links={linkArray} />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <AppIcon />
            <MenuLinks links={linkArray} />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
