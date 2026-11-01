import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative w-full overflow-hidden bg-[#1c1c1c]">
      <h1 id="hero-title" className="sr-only">
        Sukuti Ghar is a taste of Nepal, far from home
      </h1>
      <div className="relative h-[300px] w-full sm:h-[420px] md:aspect-[1920/814] md:h-auto">
        <Image
          src="/images/sukuti-new-board.jpg"
          alt="Skewered sausages, iced drinks, spiced potato wedges, momo with sauce and mint lemonade around the Nepali words छिटो मिठो"
          width={1920}
          height={814}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-[50%_50%]"
        />
      </div>
    </section>
  );
}
