import TopMenu from "./top-menu";
import Search from "./search";
import User from "./user";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <TopMenu />
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Search />
        <User />
      </div>
    </header>
  );
}
