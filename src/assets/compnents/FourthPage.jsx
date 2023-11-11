import backGround from "../images/fourthPageBg.jpg";
import GooglePlay from "../images/playstore.png";
import AppleStore from "../images/appstore.png";
const FourthPage = () => {
  return (
    <>
      <div className="bg-[#340265] relative">
        <div className="container mx-auto  relative text-white">
          <img src={backGround} alt="" className="h-[325px] object-cover" />
          <h1 className="text-3xl font-bold text-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Transaction made effortless.
            <br />
            Download app for Free
          </h1>
          <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 gap-8">
            <a
              href="https://khalti.com/android?csrt=17433389194588120169"
              className=""
            >
              <img src={GooglePlay} alt="" />
            </a>
            <a href="https://khalti.com/ios?csrt=17433389194588120169">
              <img src={AppleStore} alt="" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="head text-b text-center">
        Our Mission is to bring easy access to Finance
      </h1>
    </>
  );
};

export default FourthPage;
