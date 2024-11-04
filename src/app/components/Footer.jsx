import FB from "@/app/assets/Icons/Facebook.png";
import X from "@/app/assets/Icons/Twitter.png";
import IG from "@/app/assets/Icons/Instagram.png";
import In from "@/app/assets/Icons/LinkedIn.png";
import Image from "next/image";
import Button from "./UI/Button";
function Footer() {
  return (
    <footer className="flex px-20 py-8 bg-main-1 gap-2">
      <p className="mr-auto font-extralight">
        Copyright © 2024 MY FRIEND AI | All Rights Reserved{" "}
      </p>
      <Button className="flex px-[1rem] py-[0.7rem] rounded-xl bg-main-3">
        <Image src={FB} alt="Facebook icon" />
      </Button>
      <Button className="flex px-[0.7rem] py-[0.7rem] rounded-xl bg-main-3">
        <Image src={X} alt="Twitter icon" />
      </Button>
      <Button className="flex px-[0.7rem] py-[0.7rem] rounded-xl bg-main-3">
        <Image src={IG} alt="Instagram icon" />
      </Button>
      <Button className="flex px-[0.7rem] py-[0.7rem] rounded-xl bg-main-3">
        <Image src={In} alt="LinkedIn icon" />
      </Button>
    </footer>
  );
}

export default Footer;
