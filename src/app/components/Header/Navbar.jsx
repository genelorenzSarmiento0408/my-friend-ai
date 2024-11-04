import logo from "@/app/assets/round.png";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";
import arrow from "@/app/assets/Arrow_right.png";

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-8 items-center py-6 px-20">
        <Image
          src={logo}
          width={65}
          alt="dsds"
          className="mr-auto h-12 lg:h-16 sm:h-14"
        />
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"#about"}>About</Link>
        </li>{" "}
        <li>
          <Link href={"#goal"}>Goal</Link>
        </li>
        <li>
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
