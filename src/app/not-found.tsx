import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#181818] px-4 py-20 text-center text-white">
      <div className="max-w-lg">
        <p className="caption-3 uppercase tracking-[0.2em] text-[#e8aa42]">
          404
        </p>
        <h1 className="heading-1 mt-4">This table is empty.</h1>
        <p className="body-3 mt-4 text-[#b8b8b8]">
          The page you asked for is not here. Return to the restaurant and find
          your way back to the menu.
        </p>
        <Link
          href="/"
          className="button-md mt-6 inline-flex items-center gap-2 rounded-full bg-[#e8aa42] px-3 py-2 text-[#1F1F1F] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2c66f] active:scale-[0.98]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back to the restaurant
        </Link>
      </div>
    </main>
  );
}
