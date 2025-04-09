import Script from "next/script";

const HomeCoinGecko = () => {
  return (
    <div className="overflow-y-hidden">
    <Script src="https://widgets.coingecko.com/gecko-coin-market-ticker-list-widget.js"/>
    <gecko-coin-market-ticker-list-widget
      locale="en"
      dark-mode="true"
      outlined="true"
      initial-currency="usd"
      vce-ready=""
    ></gecko-coin-market-ticker-list-widget>
  </div>
  )
}

export default HomeCoinGecko