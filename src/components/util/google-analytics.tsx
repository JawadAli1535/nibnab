import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const GoogleAnalytics = () => (
  <>
    <SpeedInsights />
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
    />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
      `}
    </Script>
  </>
);
