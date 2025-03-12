import { cn } from "../lib/utils";

interface NavProps {
  type: "horizontal" | "vertical";
  className?: string;
  ulClassName?: string;
}

const Nav = ({ type, className, ulClassName }: NavProps) => {
  return (
    <nav className={className}>
      <ul
        className={cn(
          "flex gap-4",
          {
            "flex-col": type === "vertical",
            "items-center justify-center": type === "horizontal",
          },
          ulClassName
        )}
      >
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">My work</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
