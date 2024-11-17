import Image from "next/image";
import placeholder from "@/app/assets/iStock-1995180888.png";
import icon_explore from "@/app/assets/icon_explore.png";
function Vision() {
  return (
    <div className="grid grid-col-3 lg:flex-row mt-8 px-6 lg:px-20 py-14 gap-6 bg-vision bg-no-repeat">
      <div className="md:col-span-2 md:mt-auto">
        <Image src={icon_explore} alt="an icon" />
        <h1 className="text-3xl font-bold">Our vision</h1>
      </div>
      <div className="w-full col-span-4 md:col-span-2 md:col-end-5 md:row-span-2">
        <Image alt="placeholder" src={placeholder} className="rounded-2xl" />
      </div>
      <p className="col-span-4 md:col-span-2 font-extralight text-lg">
        Our vision is that everyone feels love. In a world where disconnect is
        rampant despite vast technological progress, we fuse best-in-class
        technology with what makes us human, to bring us back to our truer,
        happier, connected selves.
      </p>
    </div>
  );
}

export default Vision;
