import { poppins } from "@/app/layout";
import placeholder from "@/app/assets/Hero_image.png";
import Image from "next/image";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-12 md:pt-22 gap-4 h-auto px-20">
      <h1 className={`${poppins.className} text-8xl italic font-light`}>
        MY FRIEND
      </h1>
      <p className="font-extralight">The First AI Assistant for Women</p>
      <Image src={placeholder} alt="placeholder" className="rounded-t-2xl " />
    </div>
  );
}

export default Hero;
