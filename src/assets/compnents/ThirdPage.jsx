import { useState } from "react";
import ButtonImage from "../images/YouTubeCover.jpg";
import { Icon } from "@iconify/react";
const ThirdPage = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="container mx-auto text-center mt-40 relative">
      <h1 className="head text-b mb-3">How to load Funds?</h1>
      <p>Add funds to Khalti from our various online & offline methods</p>
      {!clicked && (
        <button
          className="w-[1106px] h-[396px] relative cursor-default mt-7"
          onClick={() => setClicked(true)}
        >
          <img
            src={ButtonImage}
            alt="cover"
            className=" h-full w-full object-cover transform -scale-x-[1]"
          />
          <div className=" bg-b z-[11]  absolute top-0 opacity-40 h-full w-full"></div>
          <Icon
            icon="gridicons:play"
            className="h-[100px] w-[100px] absolute  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white cursor-pointer z-20"
          />
        </button>
      )}

      {clicked && (
        <iframe
          width="1106"
          height="396"
          src="https://www.youtube.com/embed/kU92s65SUgc"
          title="How to load funds in Khalti Wallet via e-banking or m-banking?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="m-auto mt-10"
        ></iframe>
      )}
    </div>
  );
};

export default ThirdPage;
