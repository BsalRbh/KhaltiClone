import { Icon } from "@iconify/react";
import { useState } from "react";
const VideoTemplate = ({ ImageLink, YoutubeLink, clicked, setClicked }) => {
  return (
    <div>
      {!clicked && (
        <button
          className="lg:w-[1106px] lg:h-[396px] relative cursor-default mt-7"
          onClick={() => setClicked(true)}
        >
          <img
            src={ImageLink}
            alt="cover"
            className=" h-full w-full object-cover transform -scale-x-[1] rounded-t-3xl"
          />
          <div className=" bg-b z-[11]  absolute top-0 opacity-40 h-full w-full rounded-t-3xl"></div>
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
          src={YoutubeLink}
          title="How to load funds in Khalti Wallet via e-banking or m-banking?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="m-auto mt-10"
        ></iframe>
      )}
    </div>
  );
};

export default VideoTemplate;
