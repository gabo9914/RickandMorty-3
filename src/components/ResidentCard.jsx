import axios from "axios";
import { useEffect, useState } from "react";
import "./css/App.css";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setresidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: " bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setresidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="card-box mr-2 ml-2 flex flex-col">
      <header className=" flex flex-col items-center">
        <div className=" status-box flex justify-center items-center gap-2 p-2">
          <div
            className={`h-[10px] aspect-square rounded-full ${
              residentStatus[residentInfo?.status]
            }`}
          ></div>
          {residentInfo?.status}
        </div>
        <img src={residentInfo?.image} />
      </header>
      <section className=" box-ul">
        <h3 className=" text-center font-extrabold text-xl text-black">{residentInfo?.name}</h3>
        <ul className="box-ul">
          <div className="list-item-o">
            <div className="box1"><span>Species:</span> </div>
            <div className="box2">{residentInfo?.species}</div>
          </div>
          <div className=" list-item-o">
            <div className="box1"><span>Origin:</span></div>
            <div className="box2"><span>{residentInfo?.origin.name}</span></div>
          </div>
          <div className="list-item-o">
            <div className="box1"><span>Time appear:</span></div>
            <div className="box2">{residentInfo?.episode.length}</div>
          </div>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCard;
