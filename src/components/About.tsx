import Image from "next/image";
import { aboutParagraphs, features } from "@/data/site";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-black pt-12 md:pt-20 lg:pt-[161px]"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12 lg:pl-[138px] 2xl:grid-cols-[631px_1fr] 2xl:gap-x-[100px]">
          {/* Photo + overlapping feature cards */}
<div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none 2xl:max-w-[631px]">
  <div className="relative overflow-hidden rounded-[6px]">
    <Image
      src="/images/a051034c-7dcc-42bc-960e-b8e4d9bd0282.png"
      alt="Guests sharing meals at wooden tables in the Yellow Theli dining area"
      width={631}
      height={789}
      sizes="(min-width: 1024px) 631px, 100vw"
      className="block h-auto w-full rounded-[6px]"
    />
  </div>

            <ul className="mt-6 grid grid-cols-2 gap-3 lg:absolute lg:left-[-138px] lg:top-[56px] lg:mt-0 lg:block lg:space-y-[26px] 2xl:top-[163px] 2xl:space-y-[39px]">
              {features.map((f) => (
                <li
                  key={f.label}
                  className="flex h-[64px] items-center gap-4 rounded-[10px] bg-brand-teal px-4 font-montserrat text-[15px] text-white lg:h-[86px] lg:w-[358px] lg:gap-[20px] lg:px-[31px] lg:text-[21px]"
                >
                  <span className="flex w-[30px] shrink-0 justify-center lg:w-[37px]">
                    <Image
                      src={f.icon}
                      alt=""
                      width={f.w}
                      height={f.h}
                      className="h-auto w-[26px] lg:w-auto"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(17%) sepia(94%) saturate(5000%) hue-rotate(350deg) brightness(95%)",
                      }}
                    />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Copy */}
          <div className="lg:pt-[30px] 2xl:w-[640px] 2xl:pt-[62px]">
            <p className="font-montserrat text-[16px] text-red-600 lg:text-[18px]">
              About
            </p>

            <h2
              id="about-title"
              className="mt-3 font-montserrat text-[32px] font-bold leading-[1.25] text-white md:text-[40px] lg:mt-[16px] lg:text-[44px] 2xl:mt-[20px] 2xl:text-[60px] 2xl:leading-[72px]"
            >
              Sukuti Ghar is a taste of Nepal, far from home
            </h2>

            <div className="mt-5 space-y-3 font-poppins text-[16px] leading-[1.75] text-[#ececec] lg:mt-[20px] lg:text-[18px] lg:leading-[1.75] 2xl:mt-[27px] 2xl:text-[22.2px] 2xl:leading-[37px]">
              {aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}