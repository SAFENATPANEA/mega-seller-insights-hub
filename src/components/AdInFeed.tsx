
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}


const AdInFeed = () => {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      // Silenciar errores de doble renderizado en desarrollo
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-5f+cb-1t-91+xf"
        data-ad-client="ca-pub-3247697122989565"
        data-ad-slot="5803744954"
        ref={adRef}
      ></ins>
    </div>
  );
};

export default AdInFeed;
