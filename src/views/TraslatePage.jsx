import { useState, useEffect } from "react";
import { FaFile } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import Loading from "../components/Loading/Loading";
import Partitura from "../../public/partitura.png";
import Logo from "../../public/logo.jpg";

const TraslatePage = () => {
  const [textButton, setTextButton] = useState("Traducir");

  const handleChangeTextButton = () => {
    if (textButton === "Traducir") {
      setTextButton("Traduciendo...");
    } else {
      setTextButton("Traducir");
    }
  };

  useEffect(() => {
    if (textButton === "Traduciendo...") {
      const timer = setTimeout(() => {
        setTextButton("Traducido");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [textButton]);

  return (
    <div className="w-full h-full text-center">
      <div className="flex flex-col justify-center items-center my-4">
        <img src={Logo} alt="Logo" className="w-[52px] h-[52px] rounded-md" />
        <h1 className="text-center text-[20px]">Traducir Partituras</h1>
      </div>

      <div className="flex flex-col justify-between items-center gap-5">
        {textButton === "Traducir" ? (
          <div className="bg-[#E8E8F2] text-[#4F4F96] w-[90%] h-[500px] rounded-md flex flex-col justify-center items-center shadow-md p-5">
            <p className="py-2">Da click para seleccionar una opción</p>
            <div>
              <FaFile color="#4F4F96" size={40} />
              <p className="text-[32px]">O</p>
              <FaCamera color="#4F4F96" size={40} />
            </div>
          </div>
        ) : textButton === "Traduciendo..." ? (
          <div className="bg-[#E8E8F2] text-[#4F4F96] w-[90%] h-[500px] rounded-md flex flex-col justify-center items-center shadow-md p-5">
            <Loading />
          </div>
        ) : (
          <div className="bg-[#E8E8F2] text-[#4F4F96] w-[90%] h-[500px] rounded-md flex flex-col justify-center items-center shadow-md">
            <img
              src={Partitura}
              alt="Imagen de Resultado"
              className="w-[100%] h-[500px] rounded-md shadow-md"
            />
          </div>
        )}

        <button
          onClick={handleChangeTextButton}
          className="bg-[#E8E8F2] text-[#4F4F96] rounded-md p-3 w-[200px]"
        >
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default TraslatePage;
