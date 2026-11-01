import Image from "next/image";
import type { MenuItem } from "@/data/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <li className="list-none">
      <Image
        src={item.image}
        alt={item.name}
        width={352}
        height={352}
        sizes="(min-width: 1536px) 352px, (min-width: 1024px) 23vw, 46vw"
        className="aspect-square w-full rounded-[6px] bg-white object-cover"
      />
      <h3 className="mt-[28px] font-montserrat text-[16px] font-normal text-white lg:mt-[38px] lg:text-[21.3px]">{item.name}</h3>
      <p className="mt-[8px] font-poppins text-[16px] text-brand-yellow lg:mt-[12px] lg:text-[22.2px]">{item.price}</p>
    </li>
  );
}
