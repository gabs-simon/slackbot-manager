"use client";

import { usePathname } from "next/navigation";
import { MenuLink, type MenuProps } from "~/components/layout/admin/menu-link";

const SideMenuItem: React.FC<MenuProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <MenuLink
      href={href}
      isActive={isActive(href)}
      activeClassName="font-semibold text-primary"
    >
      {children}
    </MenuLink>
  );
};

const SideMenu: React.FC = () => {
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      <SideMenuItem href="/admin/settings/general">General</SideMenuItem>
      <SideMenuItem href="/admin/settings/integrations">
        Integrations
      </SideMenuItem>
    </nav>
  );
};

export default SideMenu;
