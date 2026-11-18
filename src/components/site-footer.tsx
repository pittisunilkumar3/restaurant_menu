import Link from "next/link";

const footerLink =
  "caption-4 transition-colors duration-300 hover:text-[#e8aa42]";

export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="title-2 inline-block">
            Saffron & Smoke
          </Link>
          <p className="caption-5 mt-1 text-[#a8a8a8]">
            Restaurant name, menu and prices shown are sample content.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex gap-4">
          <Link className={footerLink} href="/menu">
            Menu
          </Link>
          <Link className={footerLink} href="/#rate">
            Rate us
          </Link>
          <Link className={footerLink} href="/#faq">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}
