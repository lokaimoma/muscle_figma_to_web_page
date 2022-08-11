import { ReactNode } from "react";

interface FrostCardProp {
  children: ReactNode;
}

const FrostCard = ({ children }: FrostCardProp) => {
  return (
    <div className="rounded-lg bg-white/30 backdrop-blur-md pl-4 pr-1 pb-7 pt-8 self-stretch w-[270px]">
      {children}
    </div>
  );
};

export default FrostCard;
