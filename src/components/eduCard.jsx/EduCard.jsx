import { faCaretLeft, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EduCard = ({ title, description, year, color }) => {
  return (
    <div className="flex justify-center pb-10 z-10">
      <div className="w-auto">
        <div
          style={{ background: color }}
          className="border-4 border-softBackground h-10 w-10 rounded-full flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faPencil}
            className="w-3 h-3 md:w-5 md:h-5 text-white"
          />
        </div>
      </div>

      <div className="relative ml-10 w-full">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="absolute top-0 left-[-23px] w-10 h-10 text-softBackground"
        />

        <div className="w-full h-auto bg-softBackground p-4">
          <div className="font-bold pb-3 md:pb-8 md:text-xl text-lg lg:text-2xl">
            {title}{" "}
            <span className="text-xs md:text-sm pl-2 text-gray-400">
              {year}
            </span>
          </div>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EduCard;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretLeft, faPencil } from "@fortawesome/free-solid-svg-icons";

// const EduCard = ({title, description, year, color}) => {

//   return (
//     <div className=" flex justify-center pb-10 z-10">
//       <div className=" w-auto">
//       <div style={{background: `${color}`}} className=" border-4 border-softBackground h-10 w-10 rounded-[50%] flex justify-center items-center">
//         <FontAwesomeIcon icon={faPencil} className=" w-3 h-3 md:w-5 md:h-5 text-white" />
//       </div>
//       </div>
//       <div className="relative ml-10 w-full">
//         <FontAwesomeIcon
//           icon={faCaretLeft}
//           className=" absolute top-0 left-[-23px] w-10 h-10 text-softBackground pr-[-20px]"
//         />

//         <div className=" w-full h-auto bg-softBackground p-4">
//           <div className=" font-bold pb-3 md:pb-8 md:text-xl text-lg lg:text-2xl">
//             {title} <span className=" text-xs md:text-sm pl-2 text-gray-400">{year}</span>
//           </div>
//           <p className=" text-xs md:text-sm">
//             {description}
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default EduCard;
