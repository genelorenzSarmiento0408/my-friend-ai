import { poppins } from "@/app/layout";
import placeholder from "@/app/assets/Hero_image.png";
import Image from "next/image";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center px-12 pt-12 md:pt-22 lg:gap-4 h-auto lg:px-20">
      <div></div>
      <h1
        className={`${poppins.className} text-4xl lg:text-8xl italic font-light`}
      >
        MY FRIEND
      </h1>
      <p className="font-extralight text-4xl text-center mt-2 mb-6">
        The First AI Assistant for Women
      </p>
      <Image src={placeholder} alt="placeholder" className="rounded-2xl " />
    </div>
  );
}

export default Hero;
