import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { jsonData } from "../firebase/info";
import { useEffect, useState } from "react";
import Img1 from "../../public/alteraciones.png";
import Img2 from "../../public/grupos.webp";
import Img3 from "../../public/claves.png";
import Img4 from "../../public/notas.jpg";

const topics = {
  signos: jsonData.musicografiaBraille.signosBasicos,
  basicos: jsonData.musicografiaBraille.signosBasicos,
  notas: jsonData.musicografiaBraille.signosBasicos.notasYSilencios.descripcion,
  silencios:
    jsonData.musicografiaBraille.signosBasicos.notasYSilencios.descripcion,
  signoso:
    jsonData.musicografiaBraille.signosBasicos.signosDeOctava.descripcion,
  octava: jsonData.musicografiaBraille.signosBasicos.signosDeOctava.descripcion,
  claves: jsonData.musicografiaBraille.claves.descripcion,
  alteraciones:
    jsonData.musicografiaBraille.alteracionesCompasArmadura.descripcion,
  compas: jsonData.musicografiaBraille.alteracionesCompasArmadura.descripcion,
  armadura: jsonData.musicografiaBraille.alteracionesCompasArmadura.descripcion,
  grupos: jsonData.musicografiaBraille.gruposRitmicos.descripcion,
  ritmicos: jsonData.musicografiaBraille.gruposRitmicos.descripcion,
  acordes: jsonData.musicografiaBraille.acordes.descripcion,
  ligaduras: jsonData.musicografiaBraille.ligaduras.descripcion,
};

const InfoPage = () => {
  const { id } = useParams();
  const [text, setText] = useState({ text: "", title: "", img: "" });

  const navigate = useNavigate();
  useEffect(() => {
    let sectionText = "";
    let sectionTitle = "";
    let img = "";
    let busqueda = id.split("-")[0].toLowerCase();
    const matchedTopic = Object.keys(topics).find((key) =>
      busqueda.toLowerCase().includes(key)
    );

    if (matchedTopic) {
      const response = topics[matchedTopic];
      if (Object.keys(response).length === 2) {
        sectionText = (
          <>
            <p>{response.notasYSilencios.descripcion}</p>
            <br />
            <p>{response.signosDeOctava.descripcion}</p>
          </>
        );
        img = Img4;
      } else {
        sectionText = response;
        if (matchedTopic === "claves") {
          img = Img3;
        } else if (matchedTopic === "grupos") {
          img = Img2;
        } else if (matchedTopic === "alteraciones") {
          img = Img1;
        }
      }
      sectionTitle = matchedTopic.toUpperCase();
    } else {
      sectionText = <p>Información no encontrada.</p>;
      sectionTitle = "Sección no encontrada";
    }

    setText({
      text: sectionText,
      title: sectionTitle,
      img: img,
    });
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full flex-row justify-between items-center p-5">
        <IoMdArrowBack
          size={28}
          color="black"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1 className="text-center text-[24px]">{text.title}</h1>
      </div>
      <img src={text.img} className="w-[90%] rounded-md shadow-md" />
      <p className="p-5 text-[18px] text-justify">{text.text}</p>
    </div>
  );
};

export default InfoPage;
