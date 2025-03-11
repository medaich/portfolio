import { cn } from "../__lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("p-8 md:px-22 lg:px-44", className)}>{children}</div>
  );
};

export default Wrapper;
