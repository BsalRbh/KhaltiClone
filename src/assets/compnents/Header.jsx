import khaltiLogo from "../images/khaltiLogo.png";
import { Icon } from "@iconify/react";
import Button from "./Button";
import useScroll from "../hooks/useScroll";

const Header = () => {
  const [posY, clickHandle] = useScroll();
  const menu = [
    "Home",
    "About us",
    <div className="flex items-center">
      Services
      <Icon icon="icon-park-outline:down" />
    </div>,
    "Load Fund",
    <div className="flex items-center">
      Business Solution
      <Icon icon="icon-park-outline:down" />
    </div>,
    "Blog",
    <div className="flex items-center">
      More
      <Icon icon="ic:baseline-plus" />
    </div>,
  ];

  return (
    <div className="fixed bg-white z-50 outline outline-1 outline-slate-300">
      <div className="bg-db w-screen h-11 p-1">
        <div className="container mx-auto flex items-center text-white justify-between px-2">
          <div className=" flex items-center">
            <Icon
              icon="ion:call-sharp"
              className=" text-white bg-b rounded-full p-1 text-xl"
            />
            1660-01-5-8888
            <Button variant="darkOrange">Get App</Button>
          </div>
          <div>
            <Button variant="darkBlue">Login</Button>
            <Button variant="darkBlue">Register</Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center h-[67px] justify-between">
        <img src={khaltiLogo} alt="KhaltiLogo" className=" h-[53px]" />
        <ul className="flex">
          {menu.map((item, index) => (
            <li
              key={index}
              className="px-5 text-textBlue hover:text-amber-500 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {posY > 130 && (
        <button
          className="bg-b text-white fixed bottom-12 right-0 z-50 font-bold"
          onClick={clickHandle}
        >
          <Icon icon="mingcute:up-fill" className="text-[60px]" />
        </button>
      )}
    </div>
  );
};

export default Header;
