"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const FeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded) return;

    const timeout = setTimeout(() => {
      if (
        containerRef.current &&
        !containerRef.current.querySelector(
          "gecko-coin-market-ticker-list-widget"
        )
      ) {
        const widget = document.createElement(
          "gecko-coin-market-ticker-list-widget"
        );
        widget.setAttribute("locale", "en");
        widget.setAttribute("dark-mode", "true");
        widget.setAttribute("outlined", "true");
        widget.setAttribute("initial-currency", "eur");
        widget.setAttribute("vce-ready", "");
        containerRef.current.appendChild(widget);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [isScriptLoaded]);

  return (
    <>
      <div className="w-full bg-[url(/features-bg.png)] h-full mt-[90px] py-[90px] px-0  bg-cover bg-center overflow-hidden">
        <div className="container pr-[15px] pl-[15px] mr-auto ml-auto">
          <Script
            src="https://widgets.coingecko.com/gecko-coin-market-ticker-list-widget.js"
            strategy="afterInteractive"
            onLoad={() => setIsScriptLoaded(true)}
          />
          <div ref={containerRef} />
        </div>
      </div>
      <div className="container pr-[15px] pl-[15px] mr-auto ml-auto mb-6">
        <div className="h-12 w-36 rounded-md flex justify-center items-center bg-[#2596be] mx-auto mt-4 text-center text-white">
          <Link className="p-2 text-xl" href="#">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
