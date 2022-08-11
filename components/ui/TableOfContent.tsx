import Link from "next/link";
import FlexLayout from "../layout/FlexLayout";
import ChevronDown from "./icons/ChevronDown";
import DoubleChevronRight from "./icons/DoubleChevronRight";
import List from "./icons/List";

type ContentLink = {
  title: string;
  url: string;
};

interface TableOfContentProp {
  links: ContentLink[];
}

const TableOfContent = ({ links }: TableOfContentProp) => {
  return (
    <nav className="w-full border border-[rgba(0, 0, 0, 0.3)] rounded-md">
      <header className="w-full flex items-center justify-between bg-[#F2F2F2] p-3">
        <FlexLayout>
          <List /> <h4>Table of Contents</h4>
        </FlexLayout>
        <ChevronDown />
      </header>

      <div className="p-5">
        {links.map((link, index) => (
          <FlexLayout key={index}>
            <DoubleChevronRight />
            <Link href={link.url}>
              <a className="text-sm">{link.title}</a>
            </Link>
          </FlexLayout>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContent;
