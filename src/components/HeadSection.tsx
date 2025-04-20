"use client";

import { useEffect } from "react";
import CarouselItem from "./CarouselItem";
import CoinGeckoWidget from "./CoinGeckoWidget";
import Navbar from "./Navbar";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
  }
}

const HeadSection = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Define the global callback function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="bg-[url(/banner-bg.png)] w-full h-full ">
      <div className="">
        <Navbar />
        <div
          className="flex items-center justify-center "
          id="google_translate_element"
        ></div>
        <CoinGeckoWidget />
        <CarouselItem />
      </div>
    </div>
  );
};

export default HeadSection;
