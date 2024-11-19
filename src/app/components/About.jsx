import Image from "next/image";
import Button from "./UI/Button";
import About_image from "../assets/About_image.jpg";
import icon_goals from "../assets/icon_goals.png";
import placeholder from "@/app/assets/iStock-1995180888.png";
import icon_explore from "@/app/assets/icon_explore.png";
import arrow from "@/app/assets/Arrow_right.png";
import Link from "next/link";
function About() {
  return (
    <div
      className="grid lg:flex-row mt-8 px-6 lg:px-20 py-14 gap-6 bg-About bg-cover bg-no-repeat"
      id="about"
    >
      <div className="col-span-3 lg:col-span-2 lg:col-end-5 lg:row-end-2 h-full lg:flex lg:flex-col lg:justify-end lg:ml-6">
        <Image src={icon_goals} alt="icon" />
        <h1 className="text-3xl font-bold my-6">Flagship Product</h1>
      </div>
      <div className="col-span-3 md:col-span-2 md:row-span-2 md:place-self-center md:min-w-full md:h-full">
        <Image
          alt="about image"
          src={About_image}
          className="rounded-3xl md:mt-auto md:w-full md:h-full object-cover"
        />
      </div>
      <div className="w-full h-auto py-6 col-span-4 lg:col-span-2 lg:col-end-5 lg:px-6 lg:pr-12 lg:flex lg:flex-col lg:justify-start">
        <p className="text-lg mb-6 font-extralight">
          My-Friend is building Samantha: the world{"'"}s first woman-centered
          AI. With features developed around the unique challenges that women
          face, she aims to lift your mental load and provide emotional relief.
          Nuanced and tailored responses give you the empathy and validation you
          deserve to feel seen, feel heard, and feel better.
        </p>
        <Link href="#waitlist" className="hidden lg:block">
          <Button className={"flex gap-2"}>
            Join the Waitlist
            <Image src={arrow} alt="arrow" className="self-center" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default About;
