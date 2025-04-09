// components/CoinGeckoWidget.js
import Script from 'next/script';

const CoinGeckoWidget = () => {
  return (
    <div>
      {/* Load the CoinGecko script */}
      <Script
        src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"
        strategy="lazyOnload"
      />
      {/* The widget itself */}
      <gecko-coin-price-marquee-widget
        locale="en"
        outlined="true"
        coin-ids="bitcoin,ethereum"
        initial-currency="usd"
        dark-mode="true"
        transparent-background="true"
      ></gecko-coin-price-marquee-widget>
    </div>
  );
};

export default CoinGeckoWidget;

{/* <gecko-coin-price-marquee-widget locale="en"   outlined="true" coin-ids="" initial-currency="usd" vce-ready="">

</gecko-coin-price-marquee-widget> */}