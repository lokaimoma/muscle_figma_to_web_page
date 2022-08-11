import { ReactNode } from "react";

interface ContainerProp {
  children: ReactNode;
  spaceClass?: string;
}

const Container = ({ children, spaceClass = "" }: ContainerProp) => {
  return (
    <div className={`container mx-auto h-full ${spaceClass}`}>{children}</div>
  );
};

export default Container;
