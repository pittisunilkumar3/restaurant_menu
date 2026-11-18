import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Plus,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { RatingPanel } from "@/components/rating-panel";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TaglineReveal } from "@/components/tagline-reveal";

const googleListingName = "ASTER CAFE & KITCHEN";
const googlePlaceId = "ChIJnzK9B3SXyzsR5wxXD3IFP1M";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleListingName)}&query_place_id=${googlePlaceId}`;
const reviewUrl = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`;
const googleLinkClass =
  "button-sm inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/40 bg-[#181818] px-3 py-2 text-white transition-colors duration-300 hover:bg-[#313131] active:scale-[0.98]";

const benefits = [
  {
    title: "Find your favourite faster",
    description:
      "Clear categories help you browse small plates, mains, sides and desserts without the clutter.",
  },
  {
    title: "Choose with confidence",
    description:
      "Vegetarian and vegan labels sit beside each dish, with ingredients described in plain language.",
  },
  {
    title: "Tell us how we did",
    description:
      "Share a star rating after your visit and see it included in the restaurant average right away.",
  },
];

const steps = [
  {
    number: "01",
    title: "Browse the menu",
    description: "Explore each category and find the dishes that suit your table.",
  },
  {
    number: "02",
    title: "Enjoy your visit",
    description: "Settle in, share a few plates and let our team take care of the rest.",
  },
  {
    number: "03",
    title: "Share your rating",
    description: "Choose one to five stars and help future guests know what to expect.",
  },
];

const faqs = [
  {
    question: "Do you have vegetarian dishes?",
    answer:
      "Yes. Every menu category includes vegetarian choices, and each one is clearly marked with a leaf label.",
  },
  {
    question: "Are vegan dishes available?",
    answer:
      "Yes. Look for the Vegan label on dishes such as aloo tikki chaat, jackfruit biryani and coconut payasam.",
  },
  {
    question: "How spicy are the dishes?",
    answer:
      "Spice varies by dish. Ask our team before ordering and we will help you choose a dish that suits your taste.",
  },
  {
    question: "Can I see prices before ordering?",
    answer:
      "Yes. Every dish shows its price in Indian rupees, so you can browse the full menu before making your choices.",
  },
  {
    question: "How do I rate the restaurant?",
    answer:
      "Go to the rating section, select one to five stars and choose Share your rating. The average updates after your rating is saved.",
  },
  {
    question: "Where is my rating stored?",
    answer:
      "Ratings are saved by this website and included in the average shown on this page.",
  },
];

export default function Home() {
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
          aria-labelledby="hero-title"
          className="relative flex min-h-screen items-end overflow-hidden bg-black px-4 pb-12 pt-24 sm:px-6 lg:px-8"
        >
          <Image
            src="/saffron-table.jpg"
            alt="A table filled with Indian curries, rice and fresh coriander"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="caption-3 inline-flex rounded-full border border-white/25 bg-black/25 px-3 py-2 uppercase tracking-[0.2em] text-[#f2c66f] backdrop-blur-lg">
                  Seasonal Indian kitchen
                </p>
                <h1
                  id="hero-title"
                  className="heading-1 mt-6 max-w-[680px] bg-gradient-to-r from-white to-[#9B9B9B] bg-clip-text text-transparent"
                >
                  <span className="block">A feast of flavour,</span>
                  <span className="block">made for sharing.</span>
                </h1>
                <p className="body-3 mt-4 max-w-xl text-[#d5d5d5]">
                  Familiar Indian favourites, beautiful seasonal ingredients and
                  a table full of reasons to stay a little longer.
                </p>
                <Link
                  href="/menu"
                  className="button-md mt-6 inline-flex items-center gap-2 rounded-full bg-[#e8aa42] px-3 py-2 text-[#1F1F1F] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2c66f] active:scale-[0.98]"
                >
                  Explore the menu
                  <ArrowDown size={18} aria-hidden="true" />
                </Link>
              </div>

              <div className="hidden rounded-2xl border border-white/20 bg-[#181818]/75 p-6 text-white backdrop-blur-xl lg:block">
                <Clock size={24} className="text-[#e8aa42]" aria-hidden="true" />
                <p className="title-1 mt-4">Dinner, nightly.</p>
                <p className="body-5 mt-2 text-[#b8b8b8]">
                  Join us from 5:30 pm to 10:30 pm for slow cooked favourites and
                  something sweet.
                </p>
              </div>
            </div>

            <nav
              aria-labelledby="google-listing"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-white"
            >
              <div>
                <p className="caption-3 text-[#f2c66f]">Find us in Banjara Hills, Hyderabad</p>
                <p id="google-listing" className="title-3">{googleListingName}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={mapsUrl} className={googleLinkClass}>
                  <MapPin size={18} aria-hidden="true" />
                  Open in Google Maps
                </a>
                <a href={reviewUrl} className={googleLinkClass}>
                  <Star size={18} aria-hidden="true" />
                  Write a Google review
                </a>
              </div>
            </nav>

            <div className="caption-4 mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-[#e5e5e5]">
              {["Vegetarian choices", "Freshly prepared", "Seasonal specials"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check
                      size={14}
                      weight="bold"
                      className="text-[#e8aa42]"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#e8aa42] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <TaglineReveal />
          </div>
        </section>

        <Reveal id="why-us" className="scroll-mt-24">
          <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#ded5c5]">
              <Image
                src="/dining-room.jpg"
                alt="Warm contemporary restaurant dining room with wooden tables"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-lg bg-[#181818]/90 p-4 text-white backdrop-blur-lg">
                <p className="caption-3 uppercase tracking-[0.2em] text-[#e8aa42]">
                  Come as you are
                </p>
                <p className="title-1 mt-2">A room made for lingering.</p>
              </div>
            </div>

            <div>
              <p className="caption-3 uppercase tracking-[0.2em] text-[#9a6414]">
                The Saffron way
              </p>
              <h2 className="heading-2 mt-3 max-w-xl">
                Spice, smoke and a little bit of soul.
              </h2>
              <p className="body-3 mt-4 max-w-lg text-[#6b655c]">
                We cook the dishes we love to share, with honest ingredients and
                enough time for every flavour to find its place.
              </p>
              <div className="mt-8 grid gap-6">
                {benefits.map((benefit, index) => (
                  <article key={benefit.title} className="flex gap-4">
                    <p className="title-1 text-[#b67b20]">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="title-1">{benefit.title}</h3>
                      <p className="body-3 mt-2 text-[#6b655c]">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal className="bg-[#181818]">
          <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="caption-3 uppercase tracking-[0.2em] text-[#e8aa42]">
              Your visit
            </p>
            <h2 className="heading-2 mt-3 max-w-2xl text-white">
              From first look to final word.
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl bg-[#1F1F1F] p-6"
                >
                  <p className="title-1 text-[#e8aa42]">{step.number}</p>
                  <h3 className="title-1 mt-4 text-white">{step.title}</h3>
                  <p className="body-3 mt-2 text-[#b8b8b8]">{step.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal id="rate" className="scroll-mt-24 bg-[#e8aa42]">
          <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="caption-3 uppercase tracking-[0.2em] text-[#5f4214]">
                Your experience matters
              </p>
              <h2 className="heading-2 mt-3 max-w-xl text-[#1F1F1F]">
                Loved it? Tell the next guest.
              </h2>
              <p className="body-3 mt-4 max-w-lg text-[#4e4230]">
                Your rating helps great meals find their people. Choose your stars
                and watch the average update right away.
              </p>
            </div>
            <RatingPanel />
          </section>
        </Reveal>

        <Reveal id="faq" className="scroll-mt-24">
          <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="caption-3 uppercase tracking-[0.2em] text-[#9a6414]">
              Good to know
            </p>
            <h2 className="heading-2 mt-3">A few things before we eat.</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[#d8cbb8] bg-[#fffdf8] p-4"
                >
                  <summary className="title-3 flex cursor-pointer list-none items-center justify-between gap-4">
                    {faq.question}
                    <Plus
                      size={20}
                      className="flex-none text-[#9a6414] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="body-3 mt-3 text-[#6b655c]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="px-4 pb-20 sm:px-6 lg:px-8">
          <section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-black px-4 py-20 text-center sm:px-6">
            <Image
              src="/evening.jpg"
              alt="A welcoming restaurant prepared for evening guests"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative">
              <p className="caption-3 uppercase tracking-[0.2em] text-[#e8aa42]">
                Pull up a chair
              </p>
              <h2 className="heading-2 mx-auto mt-3 max-w-2xl text-white">
                Your next favourite dish is waiting.
              </h2>
              <p className="body-3 mx-auto mt-4 max-w-lg text-[#d5d5d5]">
                Bring your people. Bring your appetite. We’ll bring everything
                else to the table.
              </p>
              <Link
                href="/menu"
                className="button-md mt-6 inline-flex items-center gap-2 rounded-full bg-[#e8aa42] px-3 py-2 text-[#1F1F1F] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f2c66f] active:scale-[0.98]"
              >
                Explore the menu
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </section>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
