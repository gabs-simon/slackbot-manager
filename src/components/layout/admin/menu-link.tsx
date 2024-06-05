import Link from "next/link";
import { cn } from "~/lib/utils";

export type MenuLink = { href: string; content: string | React.ReactNode };
export type MenuProps = {
  href: string;
  children: string | React.ReactNode;
  isActive?: boolean;
  activeClassName?: string;
  inactiveClassName?: string;
};

export const MenuLink: React.FC<MenuProps & { className?: string }> = ({
  href,
  children,
  className,
  inactiveClassName,
  activeClassName,
  isActive = false,
}) => (
  <Link
    href={href}
    className={cn(className, isActive ? activeClassName : inactiveClassName)}
  >
    {children}
  </Link>
);

export const TopMenu: React.FC<MenuProps> = ({ href, children }) => (
  <MenuLink
    href={href}
    className="transition-colors hover:text-foreground"
    activeClassName="text-primary"
    inactiveClassName="text-muted-foreground"
  >
    {children}
  </MenuLink>
);
