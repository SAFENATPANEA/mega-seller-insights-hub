
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const AdInFeed = () => {
  const adRef = useRef<HTMLModElement | null>(null);
  const hasPushedRef = useRef(false);

  useEffect(() => {
    const el = adRef.current as unknown as HTMLElement | null;
    if (!el) return;

    const loadAd = () => {
      if (hasPushedRef.current) return;
      hasPushedRef.current = true;
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch {}
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadAd();
            io.disconnect();
          }
        });
      }, { rootMargin: "200px 0px" });
      io.observe(el);
      return () => io.disconnect();
    } else {
      // fallback
      loadAd();
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-full-width-responsive="true"
        data-ad-layout-key="-5f+cb-1t-91+xf"
        data-ad-client="ca-pub-3247697122989565"
        data-ad-slot="5803744954"
        ref={adRef}
      ></ins>
    </div>
  );
};

export default AdInFeed;
