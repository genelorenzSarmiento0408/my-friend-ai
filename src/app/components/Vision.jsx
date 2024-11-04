import Image from "next/image";
import placeholder from "@/app/assets/iStock-1995180888.png";
import icon_explore from "@/app/assets/icon_explore.png";
function Vision() {
  return (
    <div className="flex flex-col md:flex-row mt-8 px-20 py-14 sm:py-18 gap-16 bg-vision bg-no-repeat">
      <div className="flex flex-col gap-4 md:w-1/2 justify-center">
        <Image src={icon_explore} alt="an icon" />
        <h1 className="text-3xl font-bold">Our vision</h1>
        <p className="font-extralight text-lg">
          Our vision is that everyone feels love. In a world where disconnect is
          rampant despite vast technological progress, we fuse best-in-class
          technology with what makes us human, to bring us back to our truer,
          happier, connected selves.
        </p>
      </div>
      <div className="md:w-1/2">
        <Image alt="placeholder" src={placeholder} className="rounded-2xl" />
      </div>
    </div>
  );
}

export default Vision;
