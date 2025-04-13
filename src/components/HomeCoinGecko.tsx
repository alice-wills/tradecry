'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function GeckoWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded) return;

    const timeout = setTimeout(() => {
      if (
        containerRef.current &&
        !containerRef.current.querySelector('gecko-coin-market-ticker-list-widget')
      ) {
        const widget = document.createElement('gecko-coin-market-ticker-list-widget');
        widget.setAttribute('locale', 'en');
        widget.setAttribute('dark-mode', 'true');
        widget.setAttribute('outlined', 'true');
        widget.setAttribute('initial-currency', 'eur');
        widget.setAttribute('vce-ready', '');
        containerRef.current.appendChild(widget);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [isScriptLoaded]);

  return (
    <>
      <Script
        src="https://widgets.coingecko.com/gecko-coin-market-ticker-list-widget.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div ref={containerRef} />
    </>
  );
}
