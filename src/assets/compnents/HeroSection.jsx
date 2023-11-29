import { Icon } from "@iconify/react";
import HeroImage from "../images/HeroImage.jpg";
import Button from "./Button";
const HeroSection = () => {
  const services = [
    { name: "Electricity", icon: "pepicons-print:electricity" },
    { name: "Landline", icon: "vaadin:phone-landline" },
    { name: "DTH", icon: "icon-park-outline:receiver" },
    { name: "Internet", icon: "ic:round-cell-tower" },
    { name: "Topup", icon: "bi:phone" },
    { name: "Khanipani", icon: "ph:drop" },
    { name: "Insurance", icon: "carbon:umbrella" },
    { name: "Movie", icon: "ion:ticket-outline" },
    { name: "More", icon: "ic:baseline-plus" },
  ];

  return (
    <div className="flex flex-col ">
      <div className="relative">
        <img
          src={HeroImage}
          alt="Hero Image "
          className="w-screen h-[750px] object-cover z-0"
        />

        <div className=" bg-black z-[11]  absolute w-screen h-[750px] top-0 opacity-40"></div>
        <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center z-20">
          <h1 className=" text-[40px] font-bold">
            Khalti Digital Wallet and Payment Gateway
          </h1>
          <p>
            Pay bills, Send money and Accept payments online instantly from
            anywhere in Nepal using your phone.
          </p>
          <Button variant="orange">Sign Up</Button>
        </div>
      </div>
      <div className=" z-20 container bg-white justify-center h-[285px] mx-auto text-b border-[1px] flex flex-col items-center mt-[-142.5px] rounded-3xl overflow-hidden">
        <h1 className="head">Khalti Services</h1>
        <ul className="flex  justify-around min-w-full px-14 mt-6">
          {services.map((service, index) => (
            <li key={index} className="h-[100px] w-[85px]">
              <Icon
                icon={service.icon}
                className=" bg-[#F2EDF9] h-[65px] w-[65px] rounded-full p-[18px]"
              />
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
