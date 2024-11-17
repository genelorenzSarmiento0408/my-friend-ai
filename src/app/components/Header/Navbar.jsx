"use client";
import logo from "@/app/assets/round.png";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";
import arrow from "@/app/assets/Arrow_right.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [clicked, isClicked] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav
      className={`${
        clicked && width <= 1024
          ? "grid grid-cols-2 grid-rows-2 fixed bg-white inset w-full h-full z-[9999]"
          : "flex flex-row"
      } gap-8 items-center py-6 px-20`}
    >
      <Image
        src={logo}
        width={65}
        alt="dsds"
        className="mr-auto align-start h-auto lg:h-16"
      />
      <button
        className={`col-span-1 col-end-4 border border-gray-400 ${
          clicked ? "py-2 px-4 " : "p-4 "
        } space-y-1 group rounded lg:hidden `}
        onClick={() => isClicked(!clicked)}
      >
        {clicked ? (
          <div className="text-2xl font-semibold text-neutral-500">X</div>
        ) : (
          <>
            <div className="w-6 h-1 bg-neutral-500"></div>
            <div className="w-6 h-1 bg-neutral-500"></div>
            <div className="w-6 h-1 bg-neutral-500"></div>
          </>
        )}
      </button>
      <ul
        className={`flex flex-col lg:flex-row gap-8 items-center ${
          width >= 1024
            ? "flex"
            : clicked && width <= 1024
            ? "col-span-4 block"
            : "hidden"
        } `}
      >
        <li onClick={() => isClicked(false)}>
          <Link href={"/"}>Home</Link>
        </li>
        <li onClick={() => isClicked(false)}>
          <Link href={"#about"}>About</Link>
        </li>{" "}
        <li>
          <Link href={"#goal"}>Goal</Link>
        </li>
        <li onClick={() => isClicked(false)}>
          <Link href={"#waitlist"}>
            <Button className={"flex gap-2"}>
              Join the Waitlist
              <Image src={arrow} alt="arrow" className="self-center" />
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
