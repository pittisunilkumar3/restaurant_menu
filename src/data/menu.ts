export const menuCategories = [
  "Small plates",
  "Mains",
  "Breads & rice",
  "Desserts",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  diet?: "Vegetarian" | "Vegan";
};

export const menuItems: MenuItem[] = [
  {
    name: "Dahi puri",
    description: "Crisp semolina puffs, yoghurt, tamarind and pomegranate.",
    price: 195,
    category: "Small plates",
    diet: "Vegetarian",
  },
  {
    name: "Aloo tikki chaat",
    description: "Spiced potato cakes, chickpeas, onion and bright chutneys.",
    price: 215,
    category: "Small plates",
    diet: "Vegan",
  },
  {
    name: "Paneer tikka",
    description: "Charred cottage cheese, peppers, mint and pickled onion.",
    price: 325,
    category: "Small plates",
    diet: "Vegetarian",
  },
  {
    name: "Crispy okra",
    description: "Thin sliced okra, gram flour, lime and roasted spices.",
    price: 225,
    category: "Small plates",
    diet: "Vegan",
  },
  {
    name: "Butter chicken",
    description: "Charred chicken, tomato, fenugreek and cultured butter.",
    price: 425,
    category: "Mains",
  },
  {
    name: "Dal makhani",
    description: "Slow cooked black lentils, tomato, ginger and cream.",
    price: 295,
    category: "Mains",
    diet: "Vegetarian",
  },
  {
    name: "Paneer lababdar",
    description: "Hand torn paneer, rich tomato gravy and toasted cashew.",
    price: 375,
    category: "Mains",
    diet: "Vegetarian",
  },
  {
    name: "Jackfruit biryani",
    description: "Young jackfruit, fragrant basmati, mint and crisp onion.",
    price: 365,
    category: "Mains",
    diet: "Vegan",
  },
  {
    name: "Garlic naan",
    description: "Tandoor baked flatbread, garlic butter and fresh coriander.",
    price: 95,
    category: "Breads & rice",
    diet: "Vegetarian",
  },
  {
    name: "Laccha paratha",
    description: "Flaky whole wheat bread with delicate layered edges.",
    price: 85,
    category: "Breads & rice",
    diet: "Vegetarian",
  },
  {
    name: "Steamed basmati",
    description: "Long grain basmati rice with a light cumin tempering.",
    price: 165,
    category: "Breads & rice",
    diet: "Vegan",
  },
  {
    name: "Lemon rice",
    description: "Basmati, fresh lemon, curry leaves, peanuts and turmeric.",
    price: 195,
    category: "Breads & rice",
    diet: "Vegan",
  },
  {
    name: "Saffron rasmalai",
    description: "Soft milk dumplings, saffron cream and crushed pistachio.",
    price: 185,
    category: "Desserts",
    diet: "Vegetarian",
  },
  {
    name: "Cardamom kulfi",
    description: "Traditional frozen milk dessert with cardamom and almond.",
    price: 165,
    category: "Desserts",
    diet: "Vegetarian",
  },
  {
    name: "Chocolate samosa",
    description: "Crisp pastry, dark chocolate, sea salt and vanilla cream.",
    price: 195,
    category: "Desserts",
    diet: "Vegetarian",
  },
  {
    name: "Coconut payasam",
    description: "Creamy coconut, toasted rice, jaggery and cashew.",
    price: 175,
    category: "Desserts",
    diet: "Vegan",
  },
];
