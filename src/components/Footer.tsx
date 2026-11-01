import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-black py-6 text-center lg:h-[90px] lg:overflow-hidden lg:py-0 lg:leading-[96px]">
      <p className="font-montserrat text-[14px] text-white lg:text-[21.1px]">{site.footer}</p>
    </footer>
  );
}
