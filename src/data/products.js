// Central source of truth for slugs + product info
import xx99mk2Img from "../assets/xx99-mark-two.png";
import xx99mk1Img from "../assets/xx99-mark-one.png";
import xx59Img from "../assets/xx59.png";
import zx9Img from "../assets/zx9.png";
import zx7Img from "../assets/zx7.png";
import yx1Img from "../assets/yx1.png";

const products = [
  // Headphones
  {
    id: "xx99-mk2",
    slug: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    price: 2999,
    image: xx99mk2Img,
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio...",
    features: ["Featuring a genuine leather head strap and premium earcups...", "The advanced Active Noise Cancellation with built-in equalizer..."],
    boxItems: [
      { qty: 1, item: "Headphone Unit" },
      { qty: 2, item: "Replacement Earcups" },
      { qty: 1, item: "User Manual" },
      { qty: 1, item: "3.5mm 5m Audio Cable" },
      { qty: 1, item: "Travel Bag" },
    ],
    category: "headphones",
  },
  {
    id: "xx99-mk1",
    slug: "xx99-mark-one",
    name: "XX99 Mark I Headphones",
    price: 1799,
    image: xx99mk1Img,
    description: "As the gold standard for headphones...",
    features: ["Perfect for essential audio work...", "Swivel earcups..."],
    boxItems: [
      { qty: 1, item: "Headphone Unit" },
      { qty: 1, item: "User Manual" },
      { qty: 1, item: "3.5mm Audio Cable" },
    ],
    category: "headphones",
  },
  {
    id: "xx59",
    slug: "xx59",
    name: "XX59 Headphones",
    price: 899,
    image: xx59Img,
    description: "Great everyday sound...",
    features: ["Balanced sound...", "Durable materials..."],
    boxItems: [{ qty: 1, item: "Headphone Unit" }],
    category: "headphones",
  },

  // Speakers
  {
    id: "zx9",
    slug: "zx9",
    name: "ZX9 Speaker",
    price: 4500,
    image: zx9Img,
    description: "Upgrade to premium speakers...",
    features: ["Powerful low-end...", "Wireless connectivity..."],
    boxItems: [
      { qty: 2, item: "Speaker Unit" },
      { qty: 2, item: "Speaker Cable" },
      { qty: 1, item: "User Manual" },
    ],
    category: "speakers",
  },
  {
    id: "zx7",
    slug: "zx7",
    name: "ZX7 Speaker",
    price: 3500,
    image: zx7Img,
    description: "Stream high-quality sound...",
    features: ["Room-filling sound...", "Multiple inputs..."],
    boxItems: [
      { qty: 2, item: "Speaker Unit" },
      { qty: 1, item: "User Manual" },
    ],
    category: "speakers",
  },

  // Earphones
  {
    id: "yx1",
    slug: "yx1",
    name: "YX1 Earphones",
    price: 599,
    image: yx1Img,
    description: "Compact yet powerful...",
    features: ["High-fidelity drivers...", "Tangle-free cable..."],
    boxItems: [
      { qty: 1, item: "Earphones" },
      { qty: 3, item: "Ear Tips (S/M/L)" },
      { qty: 1, item: "Carry Pouch" },
    ],
    category: "earphones",
  },
];

export default products;
