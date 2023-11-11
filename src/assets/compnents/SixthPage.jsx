import { useState } from "react";
import ADBL from "../images/Banks/ADBL.jpg";
import Citizen from "../images/Banks/Citizen.jpg";
import Civil from "../images/Banks/Civil.jpg";
import Everest from "../images/Banks/Everest.jpg";
import GlobalIme from "../images/Banks/GLobal Ime.jpg";
import ICFC from "../images/Banks/ICFC.jpg";
import JBB from "../images/Banks/Jyoti Bikash Bank.jpg";
import Kumari from "../images/Banks/Kumari.jpg";
import LBBL from "../images/Banks/Lumbini Bikash.jpg";
import NIC from "../images/Banks/NIC Asia.jpg";
import NIMB from "../images/Banks/NIMB.png";
import RBB from "../images/Banks/RBB.jpg";
import Sanima from "../images/Banks/Sanima.jpg";
import Shine from "../images/Banks/SHine Resunga.jpg";

const SixthPage = () => {
  const BANKS = [
    {
      label: "Bank-link Partner",
      partners: [
        { partnerBank: "ADBL", logo: ADBL },
        { partnerBank: "Civil", logo: Civil },
        { partnerBank: "Citizen", logo: Citizen },
        { partnerBank: "Everest", logo: Everest },
        { partnerBank: "Global IME", logo: GlobalIme },
        { partnerBank: "ICFC", logo: ICFC },
        { partnerBank: "Jyoti Bikash", logo: JBB },
        { partnerBank: "ADBL", logo: ADBL },
        { partnerBank: "Civil", logo: Civil },
        { partnerBank: "Citizen", logo: Citizen },
        { partnerBank: "Everest", logo: Everest },
        { partnerBank: "Global IME", logo: GlobalIme },
        { partnerBank: "ICFC", logo: ICFC },
        { partnerBank: "Jyoti Bikash", logo: JBB },
        { partnerBank: "ADBL", logo: ADBL },
        { partnerBank: "Civil", logo: Civil },
        { partnerBank: "Citizen", logo: Citizen },
        { partnerBank: "Everest", logo: Everest },
        { partnerBank: "Global IME", logo: GlobalIme },
        { partnerBank: "ICFC", logo: ICFC },
        { partnerBank: "Jyoti Bikash", logo: JBB },
        { partnerBank: "ADBL", logo: ADBL },
        { partnerBank: "Civil", logo: Civil },
        { partnerBank: "Citizen", logo: Citizen },
        { partnerBank: "Everest", logo: Everest },
        { partnerBank: "Global IME", logo: GlobalIme },
        { partnerBank: "ICFC", logo: ICFC },
        { partnerBank: "Jyoti Bikash", logo: JBB },
      ],
    },
    {
      label: "e-Banking",
      partners: [
        { partnerBank: "Global IME", logo: GlobalIme },
        { partnerBank: "NIMB", logo: NIMB },
        { partnerBank: "NIC-Asia", logo: NIC },
        { partnerBank: "Kumari", logo: Kumari },
        { partnerBank: "RBB", logo: RBB },
      ],
    },
    {
      label: "Mobile Banking Partner",
      partners: [
        { partnerBank: "Sanima", logo: Sanima },
        { partnerBank: "Shine Resunga", logo: Shine },
        { partnerBank: "Lumbini Bikash", logo: LBBL },
        { partnerBank: "Jyoti Bikash", logo: JBB },
        { partnerBank: "Nabil", logo: Kumari },
      ],
    },
    {
      label: "Khalti via Card",
      partners: [
        { partnerBank: "MahaLaxmi Bikash", logo: ADBL },
        { partnerBank: "NIC Asia", logo: NIC },
      ],
    },
    {
      label: "Connect IPS",
      partners: [
        { partnerBank: "NIC Asia", logo: NIC },
        { partnerBank: "ADBL", logo: ADBL },
      ],
    },
    {
      label: "Counter Deposit",
      partners: [
        { partnerBank: "NIMB", logo: NIMB },
        { partnerBank: "NIC Asia", logo: NIC },
        { partnerBank: "Citizen", logo: Citizen },
        { partnerBank: "Lumbini Bikash", logo: LBBL },
        { partnerBank: "ICFC", logo: ICFC },
        { partnerBank: "Shangrila", logo: Everest },
      ],
    },
  ];
  const [label, setLabel] = useState("Bank-link Partner");
  const handleLabelClick = (label) => {
    setLabel(label);
  };
  console.log(label);
  return (
    <div className="container mx-auto mt-20 pl-24">
      <h1 className="head text-b text-center mb-[30px]">Our Partner Bank</h1>
      <ul className="flex bg-[#F7F5FB] justify-start rounded-t-3xl mb-[30px]">
        {BANKS.map((bank, i) => (
          <div key={i + "d"}>
            <li
              key={i + "ba"}
              className="px-[25px] py-[10px] cursor-pointer"
              onClick={() => handleLabelClick(bank.label)}
            >
              {bank.label}
            </li>
          </div>
        ))}
      </ul>

      <ul className="flex text-[14px] w-full flex-none flex-wrap">
        {BANKS.find((bank) => bank.label === label)?.partners.map(
          (partner, j) => (
            <li key={j} className="h-[90px] w-[100px] text-center mb-[30px]">
              <img
                src={partner.logo}
                alt="logo"
                className=" h-[60px] mx-auto"
              />
              {partner.partnerBank}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SixthPage;
