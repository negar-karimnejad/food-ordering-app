import Menu from "@/components/shared/Menu";
import SectionHeader from "@/components/ui/SectionHeader";

export default function page() {
  return (
    <section className="px-10 sm:px-24 my-20">
      <SectionHeader mainTitle="Pizza" />
      <Menu />
      <SectionHeader mainTitle="Pasta" />
      <Menu />
      <SectionHeader mainTitle="Dessert" />
      <Menu />
    </section>
  );
}
