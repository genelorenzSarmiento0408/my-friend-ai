"use client";
import Script from "next/script";

function Gtag() {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-11T08083EL");
  }
  return (
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-11T08083EL"
    />
  );
}

export default Gtag;
