import Card from "../components/Card/Card";

import Foto from "../../public/partitura.png";
import Logo from "../../public/logo.jpg";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center my-4">
        <img src={Logo} alt="Logo" className="w-[52px] h-[52px] rounded-md" />
        <h1 className="text-center text-[20px]">Musicografía</h1>
      </div>

      <div className="w-full flex justify-center items-center my-5">
        <div className="grid grid-cols-2 gap-10">
          <Card title={"signos-basicos"} text={"Signos Básicos"} img={Foto} />
          <Card title={"claves"} text={"Claves"} img={Foto} />
          <Card
            title={"alteraciones-compas-armadura"}
            text={"Alteraciones, Compás y Armadura"}
            img={Foto}
          />
          <Card title={"grupos-ritmicos"} text={"Grupos Rítmicos"} img={Foto} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
