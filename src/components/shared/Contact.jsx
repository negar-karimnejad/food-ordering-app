import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  return (
    <section className="px-10 sm:px-24 my-20">
      <SectionHeader smallTitle="Don't hesitate" mainTitle="Contact us" />
      <div className="mt-8 text-center">
        <a
          className="text-4xl underline text-gray-500"
          href="tel:+46738123123"
        >
          +46 738 123 123
        </a>
      </div>
    </section>
  );
}
