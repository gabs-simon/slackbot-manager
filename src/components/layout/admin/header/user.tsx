import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { CircleUser } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

const previousButton = () => (
  <Button variant="secondary" size="icon" className="rounded-full">
    <CircleUser className="h-5 w-5" />
    <span className="sr-only">Toggle user menu</span>
  </Button>
);

export default async function User() {
  const session = await getServerAuthSession();
  const userName = session?.user?.name ?? "Anonymous";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("");
  const userImage = session?.user?.image;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage
              src={userImage ?? "https://github.com/shadcn.png"}
              alt="@shadcn"
            />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
