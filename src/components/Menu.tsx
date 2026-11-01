export default function Menu() {
  return (
    <div className="min-h-screen bg-black pb-[env(safe-area-inset-bottom,0px)] pt-[env(safe-area-inset-top,0px)] font-[Poppins,'Helvetica_Neue',Arial,sans-serif] text-white">
      <header>
        <div className="flex items-center justify-between px-[146px] pt-[18px] max-[900px]:px-6">
          <img
            src="/images/image (7).png"
            alt="Sukuti Ghar logo"
            className="block h-16 w-16 rounded-full"
          />

          <a
            href="/"
            className="-mt-[13px] inline-flex h-[41px] items-center rounded-[3px] bg-red-600 px-[26px] text-[15px] font-semibold text-white no-underline"
          >
            Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[1232px] px-6 py-12">
        <div className="mx-auto w-full max-w-[900px]">
          <img
            src="/images/menu sukutigharr.jpg"
            alt="Sukuti Ghar menu"
            className="block h-auto w-full rounded-lg"
          />
        </div>
      </main>

      <footer className="bg-black pb-5 pt-[19px] text-center font-[Montserrat,sans-serif] text-sm">
        Copyright @2026 Developed by Digital Techno Wiz
      </footer>
    </div>
  );
}