import "./style.css";

const Listening = ({ color }) => {
  return (
    <div className="loader">
      <div className={`circle bg-[${color}]`} tabIndex="0"></div>
      <div className={`circle bg-[${color}]`} tabIndex="0"></div>
      <div className={`circle bg-[${color}]`} tabIndex="0"></div>
      <div className={`circle bg-[${color}]`} tabIndex="0"></div>
      <div className={`circle bg-[${color}]`} tabIndex="0"></div>
    </div>
  );
};

export default Listening;
