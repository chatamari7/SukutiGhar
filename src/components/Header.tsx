import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-[calc(100%-32px)] max-w-shell items-start justify-between pt-4 sm:pt-6 lg:pt-[36px]">
        <Link href="/" aria-label="Sukuti Ghar home" className="ml-0 block rounded-full lg:ml-[21px]">
          {/* <Image
            // src="/images/image (7).png"
            src="/images/image_960.png" 
            alt="Sukuti Ghar"
            width={97}
            height={97}
            priority
            className="h-[52px] w-[52px] sm:h-[72px] sm:w-[72px] lg:h-[93px] lg:w-[93px]"
          /> */}
        </Link>
        <Link
          href="/menu"
          className="mt-1 inline-flex h-[40px] items-center justify-center rounded-[6px] bg-red-600 px-5 font-poppins text-[14px] font-medium text-white transition-colors hover:bg-red-700 sm:mt-2 sm:h-[48px] sm:px-8 sm:text-[16px] lg:mt-[13px] lg:h-[62px] lg:w-[192px] lg:px-0 lg:text-[22px]"
        >
          Full Menu
        </Link>
      </div>
    </header>
  );
}
