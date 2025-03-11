import Image from "next/image";
import Wrapper from "./Wrapper";
import { assets } from "@/app/__lib/consts";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Image src={assets.logo} className="w-40" alt="logo" />
      </Wrapper>
    </header>
  );
};

export default Header;
