import Google from "../images/Google.jpg";
import Grid2 from "../images/Grid2.jpg";
import Grid3 from "../images/Grid3.jpg";
import Grid4 from "../images/Grid4.jpg";

const FifthPage = () => {
  return (
    <div className="bg-[#F7F5FB] container">
      <h1 className="head text-b text-center mb-[30px]">
        Our Mission is to bring easy access to Finance
      </h1>
      <p className="text-[14px] text-center font-thin px-20 mb-6 container mx-auto">
        We build world class digital financial products to bring easy access to
        finance to individuals all over Nepal and drive financial inclusivity
        and literacy by empowering a nationwide network of smart agents of
        change.
      </p>
      <div className="container px-20  gap-5 mx-auto grid grid-cols-6">
        <div className="md:col-span-4 sm:col-span-6 relative">
          <img src={Google} alt="img" className="rounded-3xl" />
          <div className="absolute bottom-10 left-10">
            <h1 className=" text-[28px] text-white mb-[5px] font-bold">
              GBG Story Telling Contest
            </h1>
            <p className="text-[14px] text-white mb-[10px]">
              Khalti wins GBG storytelling contest amongst several hundreds of
              companies worldwide.
            </p>
            <p className="text-[14px] text-orange">
              Watch the incredible story covered by Google Team{" "}
            </p>
          </div>
        </div>

        <div className="md:col-span-2 sm:col-span-6">
          <img src={Grid2} alt="img" className="rounded-3xl" />
          <div className="bottom-5 left-10 bg-b border pt-10 pb-14 px-8 rounded-b-3xl">
            <h1 className=" text-[28px] text-white mb-[5px] font-bold">
              BizFest 2019
            </h1>
            <p className="text-[14px] text-white mb-[10px]">
              Khalti collaborated with GBG Kathmandu to promote start-ups and
              MSME's in Nepal by providing a showcase platform to 120+
              start-ups.
            </p>
            <p className="text-[14px] text-orange">Read More</p>
          </div>
        </div>
        <div className="md:col-span-2 sm:col-span-6">
          <img src={Grid3} alt="img" className="w-full" />
          <div className="bottom-5 left-10 bg-pink-600 border pt-10 pb-10 px-8 rounded-b-3xl">
            <h1 className=" text-[28px] text-white mb-[5px] font-bold">
              Digital Birgunj
            </h1>
            <p className="text-[14px] text-white mb-[10px]">
              Khalti's #DigitalBirgunj empowerment program trained 200+
              Homemakers Women about Digital & Financial Literacy.
            </p>
            <p className="text-[14px] text-orange">Read More</p>
          </div>
        </div>
        <div className="md:col-span-4 sm:col-span-6 relative">
          <img src={Grid4} alt="img" className="w-full rounded-3xl" />
          <div className="absolute bottom-10 left-10">
            <h1 className=" text-[28px] text-white mb-[5px] font-bold">
              GBG Story Telling Contest
            </h1>
            <p className="text-[14px] text-white mb-[10px]">
              Khalti wins GBG storytelling contest amongst several hundreds of
              companies worldwide.
            </p>
            <p className="text-[14px] text-orange">
              Watch the incredible story covered by Google Team{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
