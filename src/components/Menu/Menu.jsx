import { FaMicrophone } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";

const Menu = ({ selectView }) => {
  return (
    <div className="bg-[#E8E8F2] text-[#4F4F96] grid grid-cols-3 p-3 shadow-md absolute bottom-0 w-full z-50">
      <div
        className="flex flex-col justify-center items-center gap-1 col-span-1"
        onClick={() => {
          selectView("microphone");
        }}
      >
        <FaMicrophone color="#4F4F96" size={22} />
        <p>Asistente</p>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-1 col-span-1"
        onClick={() => {
          selectView("home");
        }}
      >
        <MdHomeFilled color="#4F4F96" size={22} />
        <p>Home</p>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-1 col-span-1"
        onClick={() => {
          selectView("traslate");
        }}
      >
        <GiMusicalNotes color="#4F4F96" size={22} />
        <p>Traslate</p>
      </div>
    </div>
  );
};

export default Menu;
