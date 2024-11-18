import { poppins } from "@/app/layout";
import Image from "next/image";
import Waitlist_pic from "@/app/assets/Waitlist_picture.png";
import Form from "./Form";
function Waitlist() {
  return (
    <div className="grid grid-cols-4 gap-8 w-full" id="waitlist">
      <div className="h-full self-center col-span-2 lg:row-span-4 lg:row-end-4">
        <Image
          src={Waitlist_pic}
          alt="waitlist pic"
          className="h-full w-full object-cover rounded-r-2xl"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center align-center gap-6 lg:px-10 lg:pt-20">
        <h1
          className={`${poppins.className} font-semibold text-2xl lg:text-6xl`}
        >
          Join the Waitlist
        </h1>
        <p className="text-2xl lg:text-3xl font-normal">
          Keen on beta testing Samantha? Sign up now.
        </p>
      </div>
      <div className="p-10 col-span-4 lg:col-end-5 lg:col-span-2 gap-4">
        <Form />
      </div>
    </div>
  );
}

export default Waitlist;
