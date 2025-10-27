// src/data/products.js
import xx99MarkTwoImg from "../assets/xx99-mark-two.png";

export const products = [
  {
    slug: "xx99-mark-two",
    title: "XX99 Mark II Headphones",
    category: "headphones",
    price: 2999,
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It refines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: ["Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.", "The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. Combined with Bluetooth 5.0 compliance, 17-hour battery life, and cutting-edge technology."],
    boxItems: [
      { qty: 1, item: "Headphone Unit" },
      { qty: 2, item: "Replacement Earcups" },
      { qty: 1, item: "User Manual" },
      { qty: 1, item: "3.5mm 5m Audio Cable" },
      { qty: 1, item: "Travel Bag" },
    ],
    image: xx99MarkTwoImg,
  },
];

// helper to find product by slug
export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
