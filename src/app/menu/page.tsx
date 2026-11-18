import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { MenuBrowser } from "@/components/menu-browser";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "The Menu | Saffron & Smoke",
  description:
    "Browse small plates, mains, breads, rice and desserts at Saffron and Smoke, with vegetarian and vegan choices throughout the menu.",
  openGraph: {
    title: "The Menu | Saffron & Smoke",
    description:
      "Four chapters of seasonal Indian dishes made for sharing.",
    type: "website",
    images: [
      {
        url: "/small-plates.jpg",
        width: 1200,
        height: 800,
        alt: "Crisp samosas served with green chutney",
      },
    ],
  },
};

export default function MenuPage() {
  return (
    <div id="top" className="bg-[#f7f1e7] text-[#1F1F1F]">
      <a
        href="#main-content"
        className="button-sm fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-[#e8aa42] px-3 py-2 text-[#1F1F1F] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section
          aria-labelledby="menu-title"
          className="bg-[#181818] px-4 pb-16 pt-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <p className="caption-3 uppercase tracking-[0.2em] text-[#e8aa42]">
              Saffron & Smoke
            </p>
            <div className="mt-3 grid items-end gap-6 lg:grid-cols-2">
              <h1 className="heading-1 max-w-[680px] bg-gradient-to-r from-white to-[#9B9B9B] bg-clip-text text-transparent">
                The menu.
              </h1>
              <p className="body-3 max-w-lg text-[#c5c5c5] lg:justify-self-end">
                Four chapters of seasonal Indian cooking, from bright little
                plates to slow cooked favourites and something sweet.
              </p>
            </div>
            <div className="caption-4 mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[#d5d5d5]">
              <span>Vegetarian and vegan choices</span>
              <span>Prices in Indian rupees</span>
              <span>Made for sharing</span>
            </div>
          </div>
        </section>

        <section className="bg-[#f0e7d8] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <MenuBrowser />
          </div>
        </section>

        <section className="bg-[#e8aa42] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="title-1">Had dinner with us?</h2>
              <p className="body-5 mt-2 text-[#4e4230]">
                Your rating helps great meals find their people.
              </p>
            </div>
            <Link
              href="/#rate"
              className="button-md inline-flex w-fit items-center gap-2 rounded-full bg-[#1F1F1F] px-3 py-2 text-white transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#313131] active:scale-[0.98]"
            >
              Rate your visit
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
