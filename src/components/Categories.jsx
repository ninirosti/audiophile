import CategoryCard from "./CategoryCard";

import headphonesImg from "../assets/headphones.png";
import speakersImg from "../assets/speakers.png";
import earphonesImg from "../assets/earphones.png";

export default function Categories() {
  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "repeat(3, 1fr)",
        maxWidth: 1110,
        margin: "4rem auto",
        width: "100%",
      }}
    >
      <CategoryCard title="Headphones" image={headphonesImg} href="/headphones" />
      <CategoryCard title="Speakers" image={speakersImg} href="/speakers" />
      <CategoryCard title="Earphones" image={earphonesImg} href="/earphones" />
    </div>
  );
}
