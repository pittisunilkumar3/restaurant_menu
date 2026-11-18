"use client";

import Image from "next/image";
import { Leaf } from "@phosphor-icons/react";
import { useState } from "react";
import {
  menuCategories,
  menuItems,
  type MenuCategory,
} from "@/data/menu";

const categoryDetails: Record<
  MenuCategory,
  { eyebrow: string; title: string; copy: string; image: string; alt: string }
> = {
  "Small plates": {
    eyebrow: "Start here",
    title: "Little plates. Big energy.",
    copy: "Bright chutneys, crisp edges and bold spices made for passing around the table.",
    image: "/small-plates.jpg",
    alt: "Crisp samosas served with green chutney and fresh chilli",
  },
  Mains: {
    eyebrow: "From the fire",
    title: "Rich, smoky and deeply satisfying.",
    copy: "Slow cooked favourites with layers of flavour and just the right amount of indulgence.",
    image: "/mains.jpg",
    alt: "Creamy butter chicken finished with fresh coriander",
  },
  "Breads & rice": {
    eyebrow: "On the side",
    title: "The perfect supporting cast.",
    copy: "Fragrant rice and warm breads to scoop, share and make every last bite count.",
    image: "/breads-rice.jpg",
    alt: "Steamed rice cakes with coconut chutney on a banana leaf",
  },
  Desserts: {
    eyebrow: "Save room",
    title: "A sweeter final chapter.",
    copy: "Familiar Indian sweets and playful finishes, best enjoyed with one more spoon at the table.",
    image: "/desserts.jpg",
    alt: "Warm milk sweets filled with soft cream",
  },
};

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("Small plates");
  const visibleItems = menuItems.filter(
    (item) => item.category === activeCategory,
  );
  const details = categoryDetails[activeCategory];

  return (
    <div className="mt-8">
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        aria-label="Filter menu by category"
      >
        {menuCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={`button-sm flex-none rounded-full border px-3 py-2 transition-[background-color,color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] ${
                isActive
                  ? "border-[#e8aa42] bg-[#e8aa42] text-[#1F1F1F]"
                  : "border-[#cfc2ad] bg-transparent text-[#4e4a43] hover:bg-[#fffdf8]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        key={activeCategory}
        className="menu-enter mt-6 overflow-hidden rounded-3xl bg-[#1F1F1F] lg:grid lg:grid-cols-[0.95fr_1.05fr]"
        aria-live="polite"
        aria-label={`${activeCategory} menu`}
      >
        <div className="relative h-80 lg:h-auto lg:min-h-full">
          <Image
            src={details.image}
            alt={details.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-x-4 bottom-4 rounded-lg bg-[#181818]/90 p-4 backdrop-blur-lg">
            <p className="caption-3 uppercase tracking-[0.2em] text-[#e8aa42]">
              {details.eyebrow}
            </p>
            <p className="title-1 mt-2 text-white">{details.title}</p>
            <p className="body-5 mt-2 text-[#c5c5c5]">{details.copy}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 p-6 sm:p-8">
          {visibleItems.map((item) => (
            <article key={item.name}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="title-1 text-[#fffdf8]">{item.name}</h3>
                <p className="title-1 whitespace-nowrap text-[#e8aa42]">
                  ₹{item.price}
                </p>
              </div>
              <p className="body-3 mt-2 text-[#b8b8b8]">{item.description}</p>
              {item.diet ? (
                <p className="caption-4 mt-3 inline-flex items-center gap-2 rounded-full bg-[#313131] px-3 py-1 text-[#d5d5d5]">
                  <Leaf size={14} weight="fill" aria-hidden="true" />
                  {item.diet}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      <p className="caption-4 mt-6 text-[#6b655c]">
        Please tell our team about any allergies before ordering.
      </p>
    </div>
  );
}
