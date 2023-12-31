import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section className="px-10 sm:px-24 my-20" id="about">
      <SectionHeader smallTitle="Our story" mainTitle="About us" />
      <div className="text-gray-500 text-center max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima
          odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos
          suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis
          quam rem!
        </p>
        <p>
          At consectetur delectus ducimus est facere iure molestias obcaecati
          quaerat vitae voluptate? Aspernatur dolor explicabo iste minus
          molestiae pariatur provident quibusdam saepe?
        </p>
        <p>
          Laborum molestias neque nulla obcaecati odio quia quod reprehenderit
          sit vitae voluptates? Eos, tenetur.
        </p>
      </div>
    </section>
  );
}
