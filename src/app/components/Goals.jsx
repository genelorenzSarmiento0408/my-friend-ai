import Image from "next/image";
import Objectives_pic from "@/app/assets/Objectives_picture.jpg";
function Goals() {
  return (
    <section className="bg-goals bg-origin-border bg-cover bg-no-repeat">
      <div className="flex flex-col text-center p-20 gap-4" id="goal">
        <p className="font-extralight text-4xl">
          We aim to develop AI to be exactly what a woman needs whenever she
          needs it, so she can be and feel her best at every stage of her life.
        </p>
        <Image
          src={Objectives_pic}
          alt="women forming heart gestures during daytime"
          className="max-h-screen"
        />
      </div>
    </section>
  );
}

export default Goals;
