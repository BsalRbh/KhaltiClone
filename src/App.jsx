import FourthPage from "./assets/compnents/FourthPage";
import Header from "./assets/compnents/Header";
import HeroSection from "./assets/compnents/HeroSection";
import SixthPage from "./assets/compnents/SixthPage";
import ThirdPage from "./assets/compnents/ThirdPage";
import SecondPage from "./assets/compnents/secondPage";
export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <SixthPage />
      <p className="text-3xl font-bold underline py-96">Work in Progress</p>
    </>
  );
}
