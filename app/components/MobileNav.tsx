import { useState } from "react";
import { assets } from "../lib/consts";
import Image from "next/image";
import Nav from "./Nav";
import { cn } from "../lib/utils";

interface MobileNavProps {
  className?: string;
}

const MobileNav = ({ className }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <div className={cn(className)}>
      {!isOpen ? (
        <button onClick={onOpen} className="w-6">
          <Image
            className="dark:hidden"
            src={assets.menu_black}
            alt="menu icon"
          />
          <Image
            className="hidden dark:block"
            src={assets.menu_white}
            alt="menu icon"
          />
        </button>
      ) : (
        <div className="fixed h-screen w-64 right-0 top-0 p-8 bg-white dark:bg-gray-950 flex flex-col gap-16">
          <button onClick={onClose} className="self-end w-6">
            <Image
              className="hidden dark:block"
              src={assets.close_white}
              alt="close"
            />
            <Image
              className="dark:hidden"
              src={assets.close_black}
              alt="close"
            />
          </button>
          <Nav type="vertical" ulClassName="gap-8 text-md" />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
