import About from "@/app/components/About";
import Header from "@/app/components/Header/Header";
import Vision from "@/app/components/Vision";
import Waitlist from "@/app/components/Waitlist";
import Footer from "./components/Footer";
import Goals from "@/app/components/Goals";

export default function Home() {
  return (
    <>
      {/* <div className="px-20"> */}
      <Header />
      <Vision />
      {/* </div> */}
      <About />
      <Goals />
      <Waitlist />
      <Footer />
    </>
  );
}
