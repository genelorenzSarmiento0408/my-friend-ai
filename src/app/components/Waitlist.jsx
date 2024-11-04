import { poppins } from "@/app/layout";
import Image from "next/image";
import Waitlist_pic from "@/app/assets/Waitlist_picture.png";
import Form from "./Form";
function Waitlist() {
  return (
    <div className="flex flex-col lg:flex-row gap-10" id="waitlist">
      <div className="lg:w-1/2 self-center">
        <Image src={Waitlist_pic} alt="waitlist pic" />
      </div>
      <div className="lg:w-1/2 p-10 flex flex-col gap-4">
        <h1 className={`${poppins.className} font-semibold text-6xl`}>
          Join the Waitlist
        </h1>
        <p className="text-4xl">Keen on beta testing Samantha? Sign up now.</p>
        <Form />
      </div>
    </div>
  );
}

export default Waitlist;
