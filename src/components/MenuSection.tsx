import MenuCard from "./MenuCard";
import { menuItems } from "@/data/menu";

export default function MenuSection() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="scroll-mt-4 bg-black pt-16 md:pt-24 lg:pt-[100px]"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1000px]">
        <h2
          id="menu-title"
          className="text-center font-montserrat text-[30px] font-bold text-white md:text-[40px] lg:text-[52px]"
        >
          Our Ghar Special Meals:
        </h2>

        <ul className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-5 lg:mt-16 lg:gap-x-6 lg:gap-y-12">
          {menuItems.slice(0, 6).map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}