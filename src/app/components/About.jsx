import Image from "next/image";
import Button from "./UI/Button";
import About_image from "../assets/About_image.jpg";
import arrow from "@/app/assets/Arrow_right.png";
import Link from "next/link";
function About() {
  return (
    <div
      className="flex flex-col-reverse justify-center px-20 min-h-32 w-full lg:px-0 lg:flex-row gap-4 bg-About bg-cover"
      id="about"
    >
      <div className="lg:w-3/5">
        <Image alt="about image" src={About_image} className="rounded-r-2xl" />
      </div>
      <div className="self-center w-full h-auto lg:w-3/5 lg:pr-32">
        <p className="text-2xl mb-6 font-extralight">
          My-Friend is building Samantha: the world’s first woman-centered AI.
          With features developed around the unique challenges that women face,
          she aims to lift your mental load and provide emotional relief.
          Nuanced and tailored responses give you the empathy and validation you
          deserve to feel seen, feel heard, and feel better.
        </p>
        <Link href="#waitlist">
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
