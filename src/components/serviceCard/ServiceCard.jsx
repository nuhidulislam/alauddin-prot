import parse from "html-react-parser";

const ServiceCard = ({ title, description, svg, background }) => {
  return (
    <div
      className="relative text-center h-[200px] w-[210px] md:h-[240px] md:w-[230px] blurCard border-b-4 my-10 mx-1"
      style={{ borderColor: background }}
    >
      <div className="setCenter">
        <div className="hexagon relative" style={{ background: background }}>
          {parse(svg)}
        </div>
      </div>

      <div className="center w-full px-2">
        <h3 className="text-base md:text-xl font-bold py-4">{title}</h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
