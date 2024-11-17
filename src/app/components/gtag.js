"use client";
import Script from "next/script";

function Gtag() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-11T08083EL");
  return (
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-11T08083EL"
    />
  );
}

export default Gtag;
