'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function CoinGeckoWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded) return;

    // Wait a bit to ensure the widget is registered
    const timeout = setTimeout(() => {
      if (
        containerRef.current &&
        !containerRef.current.querySelector('gecko-coin-price-marquee-widget')
      ) {
        const widget = document.createElement('gecko-coin-price-marquee-widget');
        widget.setAttribute('locale', 'en');
        widget.setAttribute('outlined', 'true');
        widget.setAttribute('coin-ids', 'bitcoin,ethereum');
        widget.setAttribute('initial-currency', 'eur');
        widget.setAttribute('dark-mode', 'true');
        widget.setAttribute('transparent-background', 'true');
        containerRef.current.appendChild(widget);
      }
    }, 200); // Give the browser time to register the component

    return () => clearTimeout(timeout);
  }, [isScriptLoaded]);

  return (
    <>
      <Script
        src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div ref={containerRef} />
    </>
  );
}
