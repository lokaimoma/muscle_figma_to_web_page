type row = string[];

interface TableProp {
  headers: string[];
  rows: row[];
}

const Table = ({ headers, rows }: TableProp) => {
  const headerSize = Math.floor(80 / headers.length);
  return (
    <div
      className={`grid w-[80%]`}
      style={{
        gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
      }}
    >
      {headers.map((header, index) => (
        <div
          className={`!w-[${headerSize}%] ${
            index === 0
              ? "bg-black/80 text-white rounded-tl-xl"
              : index >= 2
              ? "bg-[#C40000]/30"
              : "bg-[#C40000]/10"
          } ${
            index + 1 == headers.length && "rounded-tr-xl"
          } font-bold p-4 border border-[#000000]/5`}
          key={index}
        >
          {header}
        </div>
      ))}
      {rows.map((row, subIdx) => {
        return row.map((text, index) => (
          <div
            className={`!w-[${headerSize}%] p-4 ${
              index === 0
                ? "bg-black/80 text-white"
                : index >= 2
                ? "bg-[#C40000]/30"
                : "bg-[#C40000]/10"
            } border border-[#000000]/5 ${
              subIdx === rows.length - 1 &&
              index === headers.length - 1 &&
              "rounded-br-lg"
            } ${subIdx === rows.length - 1 && index === 0 && "rounded-bl-xl"}`}
            key={`${index}_${subIdx}`}
          >
            {text}
          </div>
        ));
      })}
    </div>
  );
};

export default Table;
