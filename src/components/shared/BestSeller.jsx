import SectionHeader from "../ui/SectionHeader";
import Menu from "./Menu";
import Image from "next/image";

export default function BestSeller() {
  return (
    <section className="px-10 sm:px-24 my-20">
      <Image
        className="absolute left-0 top-[350px] -z-10"
        src="/sallad1.png"
        width={110}
        height={110}
        alt="sallad"
      />
      <Image
        className="absolute right-0 top-[350px] -z-10"
        src="/sallad2.png"
        width={110}
        height={110}
        alt="sallad"
      />
      <SectionHeader smallTitle="Check out" mainTitle="Our Best Sellers" />
      <Menu />
    </section>
  );
}
