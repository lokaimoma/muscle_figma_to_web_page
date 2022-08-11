import Ellipse from "./icons/Ellipse";

interface SliderProp {
  tags: string[];
  percentage: number;
}

const Slider = ({ tags, percentage }: SliderProp) => {
  const delta = tags.length > 0 ? 100 / tags.length : 0;

  return (
    <div className="rounded-full bg-[#333333] w-[50%] h-5 relative ">
      {[1, 2].map((i) => (
        <div
          key={i}
          className={`absolute cursor-pointer`}
          style={{ left: `${i * delta}%`, top: "30%", zIndex: "0" }}
        >
          <Ellipse />
        </div>
      ))}
      <div className="rounded-full h-full bg-red-600 w-1/2"></div>
    </div>
  );
};

export default Slider;
