import { site } from "@/data/site";

const cols = [
  { n: "01", title: "Location" },
  { n: "02", title: "Phone" },
  { n: "03", title: "Email" },
  { n: "04", title: "Working Hours" },
] as const;

export default function ContactPanel() {
  const { location, phone, email, hours } = site.contact;
  const link = "break-words transition-colors hover:text-brand-yellow";
  return (
    <section id="contact" aria-label="Contact information" className="bg-black pt-16 md:pt-24 lg:pt-[165px]">
      <div className="mx-auto w-[calc(100%-32px)] max-w-shell rounded-t-[12px] bg-brand-teal px-6 py-10 sm:px-10 lg:rounded-[12px] lg:px-[62px] lg:py-[60px]">
        <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 xl:gap-x-16">
          {cols.map((c, i) => (
            <div key={c.n} className="min-w-0">
              <p className="font-poppins text-[16px] text-brand-yellow lg:text-[18px] 2xl:text-[22.2px]">{c.n}</p>
              <dt className="mt-4 font-montserrat text-[20px] leading-tight text-white lg:text-[21px] 2xl:text-[24.6px]">{c.title}</dt>
              <dd className="mt-3 break-words font-poppins text-[16px] leading-[26px] text-[#e8e8e8] lg:mt-4 lg:text-[17px] lg:leading-[28px] 2xl:text-[22.2px] 2xl:leading-[32px]">
                {i === 0 && location}
                {i === 1 && (
                  <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className={link}>
                    {phone}
                  </a>
                )}
                {i === 2 && (
                  <a href={`mailto:${email}`} className={link}>
                    {email}
                  </a>
                )}
                {i === 3 && (
                  <>
                    {hours[0]}
                    <br />
                    {hours[1]}
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}