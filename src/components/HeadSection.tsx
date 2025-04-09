
import CarouselItem from "./CarouselItem";
// import CoinGeckoWidget from "./CoinGeckoWidget";
import Navbar from "./Navbar";

const HeadSection = () => {
  return (
    <div className="bg-[url(/banner-bg.png)] w-full h-full ">
      <div className="">
        <Navbar/>
        {/* <CoinGeckoWidget/> */}
        <CarouselItem/>
      </div>
    </div>
  );
};

export default HeadSection;
