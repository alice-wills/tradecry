import Link from "next/link";
import Script from "next/script";

const FeatureSection = () => {
  return (
    <>
      <div className="w-full bg-[url(/features-bg.png)] h-full mt-[90px] py-[90px] px-0  bg-cover bg-center overflow-hidden">
        <div className="container pr-[15px] pl-[15px] mr-auto ml-auto">
          <Script src="https://widgets.coingecko.com/gecko-coin-market-ticker-list-widget.js" />
          <gecko-coin-market-ticker-list-widget
            locale="en"
            dark-mode="true"
            outlined="true"
            initial-currency="usd"
            vce-ready=""
          ></gecko-coin-market-ticker-list-widget>
        </div>
      </div>
      <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mb-6">
        <div className="h-12 w-36 rounded-md flex justify-center items-center bg-[#2596be] mx-auto mt-4 text-center text-white">
          <Link className="p-2 text-xl" href="#">Read More</Link>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
