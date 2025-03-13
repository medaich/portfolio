"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import { assets } from "@/app/lib/consts";
import Nav from "./Nav";
import { useTheme } from "next-themes";
import MobileNav from "./MobileNav";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <Wrapper className="flex justify-between items-center py-4 fixed z-20 w-full top-0">
        <Image src={assets.logo} className="w-30 dark:hidden" alt="logo" />
        <Image
          src={assets.logo_dark}
          className="w-30 hidden dark:block"
          alt="logo"
        />
        <Nav
          type="horizontal"
          className="hidden lg:block font-ovo rounded-full shadow-md px-8 text-sm py-3"
          ulClassName="gap-8"
        />

        <div className="flex gap-4 text-sm items-center">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Image
              className="dark:hidden w-6"
              src={assets.moon_icon}
              alt="icon"
            />
            <Image
              className="hidden dark:block w-6"
              src={assets.sun_icon}
              alt="icon"
            />
          </button>
          <a
            href=""
            className="flex gap-2 items-center rounded-full border-[0.5px] px-4 py-2 sm:px-6 lg:px-8 lg:py-3 font-ovo"
          >
            Connect
            <Image
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-3 dark:hidden"
            />
            <Image
              src={assets.arrow_icon_dark}
              alt="arrow icon"
              className="w-3 hidden dark:block"
            />
          </a>

          <MobileNav className="lg:hidden" />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
