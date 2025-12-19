import { CartProduct, CartAddon, CartSummary } from "@/types/cart";

export const cartProducts: CartProduct[] = [
  {
    id: 1,
    name: "Chocolate Gift Basket",
    image: "/cnc_food_image/Chocolate.svg",
    description: "Box of 12 · Custom note included",
    price: 250,
    quantity: 1,
  },
  //   {
  //   id: 2,
  //   name: "Pair with vanilla celebration cake",
  //   image: "/cnc_food_image/Cake.svg",
  //   description: "6-inch · Eggless · Delivers Today",
  //   price: 0,
  //   quantity: 0,
  // },
];

export const suggestedProducts: CartProduct[] = [
  {
    id: 2,
    name: "Pair with vanilla celebration cake",
    image: "/cnc_food_image/Cake.svg",
    description: "6-inch · Eggless · Delivers Today",
    price: 0,
    quantity: 0,
  },
];

export const cartAddons: CartAddon[] = [
  {
    id: 1,
    title: "Gift card message",
    subtitle: "Gold Foil · 1 line",
    price: 25,
    image: "/cnc_food_image/giftCard.png",
  },
];

export const cartSummary: CartSummary = {
  subTotal: 275,
  delivery: 0,
  total: 275,
};
