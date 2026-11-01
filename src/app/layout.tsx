
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";


const montserrat = localFont({
  src: [
    { path: "../fonts/montserrat-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/montserrat-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/montserrat-latin-600-normal.woff2", weight: "600" },
    { path: "../fonts/montserrat-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "../fonts/poppins-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/poppins-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/poppins-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukuti Ghar | Best Nepali Food in Hurstville",
  description:
    "Sukuti Ghar is a tribute to our roots: bold, spicy, affordable street food served in a clean, cozy space. See our Happy Hour menu, location and working hours.",
  openGraph: {
    title: "Sukuti Ghar",
    description: "Chhito Mitho: bold, spicy and affordable street food.",
    type: "website",
    images: ["/images/hero.jpg"],
  },
  icons: { icon: "/images/image (7).png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
