import Image from "next/image";
import Objectives_pic from "@/app/assets/Objectives_picture.jpg";
function Goals() {
  return (
    <section className="bg-goals bg-origin-border bg-cover bg-no-repeat">
      <div className="flex flex-col text-center p-6 lg:p-20 gap-4" id="goal">
        <p className="font-extralight text-2xl">
          We aim to develop AI to be exactly what a woman needs whenever she
          needs it, so she can be and feel her best at every stage of her life.
        </p>
        <Image
          src={Objectives_pic}
          alt="women forming heart gestures during daytime"
          className="rounded-2xl border-8 border-main-1 md:border-4"
        />
      </div>
    </section>
  );
}

export default Goals;
