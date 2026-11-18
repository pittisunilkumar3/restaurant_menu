"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForkKnife, Star } from "@phosphor-icons/react";

const navigationLink =
  "button-sm rounded-full px-3 py-2 text-[#d5d5d5] transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#313131] hover:text-white active:scale-[0.98]";

export function SiteHeader() {
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto mx-auto flex w-fit max-w-full items-center gap-2 rounded-full border border-white/15 bg-[#181818]/90 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
      >
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          aria-label="Saffron and Smoke home"
          className="flex items-center gap-2 rounded-full pr-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-[#e8aa42] text-[#1F1F1F]">
            <ForkKnife size={17} weight="fill" aria-hidden="true" />
          </span>
          <span className="title-4 whitespace-nowrap text-white">
            Saffron & Smoke
          </span>
        </Link>

        <div className="flex items-center">
          <Link
            href="/menu"
            aria-current={isMenuPage ? "page" : undefined}
            className={`${navigationLink} ${isMenuPage ? "bg-[#313131] text-white" : ""}`}
          >
            Menu
          </Link>
          <Link href="/#why-us" className={`${navigationLink} hidden md:block`}>
            Our story
          </Link>
          <Link href="/#faq" className={`${navigationLink} hidden md:block`}>
            FAQ
          </Link>
        </div>

        <Link
          href="/#rate"
          className="button-sm inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#e8aa42] px-3 py-2 text-[#1F1F1F] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2c66f] active:scale-[0.98]"
        >
          <Star size={15} weight="fill" aria-hidden="true" />
          Rate us
        </Link>
      </nav>
    </header>
  );
}
