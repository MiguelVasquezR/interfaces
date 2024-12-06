import { useNavigate } from "react-router";

const Card = ({ img, text, title }) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-md shadow-md text-center w-[128px]"
      onClick={() => {
        navigate(`/info/${title}`);
      }}
    >
      <img src={img} alt="Card image" className="w-[128px] h-[128px] " />
      <div className="flex justify-center items-center h-[50px] m-5">
        <p className="text-[16px] leading-tight">{text}</p>
      </div>
    </div>
  );
};

export default Card;
