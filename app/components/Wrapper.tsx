import { cn } from "../lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("p-4 sm:p-8 lg:px-22 xl:px-44", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
