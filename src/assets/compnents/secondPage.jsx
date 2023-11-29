import { Icon } from "@iconify/react";
const SecondPage = () => {
  return (
    <div className="container px-44 text-center mt-24 mx-auto ">
      <h1 className="head text-b text-center">How Khalti Works?</h1>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <Icon
            icon="line-md:account-add"
            className=" h-[135px] w-[135px] p-10 text-b"
          />
          <h1 className="text-xl">Create Account</h1>
          <p className="max-w-[220px] text-sm">
            Register,get verified and login to khalti
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Icon
            icon="mdi:folder-download-outline"
            className=" h-[135px] w-[135px] p-10 text-darkOrange "
          />
          <h1 className="text-xl">Load Funds</h1>
          <p className="max-w-[220px] text-sm">
            Load funds via our partner banks or offline methods
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Icon
            icon="icon-park-outline:bill"
            className=" h-[135px] w-[135px] p-10 text-rose-700"
          />
          <h1 className="text-xl">Pay Bills</h1>
          <p className="max-w-[220px] text-sm">
            You are set to Pay,Send or Accept payment online
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
