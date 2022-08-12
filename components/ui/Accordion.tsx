import { useState } from "react";
import FlexLayout from "../layout/FlexLayout";
import Line from "./icons/Line";
import Plus from "./icons/Plus";

interface AccordionProp {
  header: string;
  content?: string;
}

const Accordion = ({ header, content }: AccordionProp) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="my-4">
      <div onClick={toggle} className="cursor-pointer w-max">
        <FlexLayout spaceClass="space-x-5">
          <div className="self-stretch grid place-content-center">
            {isOpen ? <Line /> : <Plus />}
          </div>
          <h4 className="font-bold text-[20px]">{header}</h4>
        </FlexLayout>
      </div>
      {content && (
        <div className={`${isOpen ? "animate-slide" : "animate-slideUp"}`}>
          <p className={`w-[40%] text-[20px] ml-10`}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
