import { useState } from "react";
import ButtonImage from "../images/YouTubeCover.jpg";
import Cash from "../images/Cash.jpg";
import Shop from "../images/Shop.jpg";
import Wallet from "../images/Wallet.jpg";
import Debit from "../images/Debit.jpg";
import Connect from "../images/Connect.jpg";

import VideoTemplate from "./VideoTemplate";
const ThirdPage = () => {
  const [clicked, setClicked] = useState(false);
  const options = [
    {
      name: "Bank to Wallet",
      image: ButtonImage,
      link: "https://www.youtube.com/embed/kU92s65SUgc",
      info: "Load funds from your bank account using eBanking or mobile banking. You can load from all our partner banks",
      more: "For loading funds via eBanking service, you must have your eBanking/ mobile banking service activated from the associated bank where you have your bank account",
    },
    {
      name: "Cash Deposit",
      image: Cash,
      link: "https:www.youtube.com/embed/ZvxPzgXYZug",
      info: "No Bank Account required. Simply load funds to Khalti using Deposit vouchers",
      more: "Investment Bank Limited or Machhapuchchhre Bank Limited.",
    },
    {
      name: "Khalti Pasal",
      image: Shop,
      link: "https://www.youtube.com/embed/kU92s65SUgc",
      info: "Go to the nearest Khalti Pasal and ask the agent to directly transfer funds to your Khalti",
      more: "As of now, there are altogether more than 8,000+ Khalti Pasals spread across 50 districts of Nepal. Local kirana pasal,small paan-pasal owners, and even those who run nanglo pasals sitting under an umbrella have turned into Khalti Pasals.",
    },
    {
      name: "Wallet to Wallet",
      image: Wallet,
      link: "https:www.youtube.com/embed/ZvxPzgXYZug",
      info: "Khalti allows you to transfer money to your friends and family just in few clicks via Send and Request feature",
      more: "feature you can Send and receive money instantly from anyone at anytime.",
    },
    {
      name: "Debit/Credit Cards",
      image: Debit,
      link: "https://www.youtube.com/embed/Fqz1JWWBIqE",
      info: "Enable your card for online payment and load using International/ VISA/ Amex/ Master/ SCT Cards",
      more: "feature you can Send and receive money instantly from anyone at anytime.",
    },
    {
      name: "Connect IPS",
      image: Connect,
      link: "https:www.youtube.com/embed/ZvxPzgXYZug",
      info: "Load fund directly through bank account by connecting your bank account to connectIPS system brought into operation by Nepal Clearing House Limited (NCHL)",
      more: "feature you can Send and receive money instantly from anyone at anytime.",
    },
  ];
  const [name, setName] = useState(options[0]);
  const clickHandle = (item) => {
    setName(item);
    setClicked(false);
  };
  const [more, setMore] = useState(false);
  return (
    <div className="bg-[#F7F5FB] pt-24">
      <div className="container mx-auto text-center  relative justify-center ">
        <h1 className="head text-b mb-3">How to load Funds?</h1>
        <p>Add funds to Khalti from our various online & offline methods</p>
        <VideoTemplate
          ImageLink={name.image}
          YoutubeLink={name.link}
          clicked={clicked}
          setClicked={setClicked}
        />

        <ul className="flex w-[1106px] mx-auto justify-around text-b bg-white -mt-2 pt-3 rounded-b-3xl ">
          {options.map((item, i) => (
            <li className="w-[150px] hover:font-bold" key={i + 1}>
              <button onClick={() => clickHandle(item)}>{item.name}</button>
            </li>
          ))}
        </ul>
        <p className="text-[14px] max-w-[925px] mx-auto mt-4 pb-16 leading-6">
          {name.info} <br />
          {!more && (
            <button onClick={() => setMore(true)} className="text-orange mt-4">
              Learn More &gt;
            </button>
          )}
          {more && name.more}
        </p>
      </div>
    </div>
  );
};

export default ThirdPage;
