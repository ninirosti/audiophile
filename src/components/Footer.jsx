import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-20">
      <h1 className="font-bold text-xl mb-6">audiophile</h1>
      <nav className="space-x-6 uppercase text-sm tracking-wide mb-6">
        <Link to="/">Home</Link>
        <Link to="/headphones">Headphones</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/earphones">Earphones</Link>
      </nav>
      <p className="text-gray-400 text-sm max-w-lg mb-6">Audiophile is an all-in-one stop to fulfill your audio needs...</p>
      <div className="flex space-x-4">
        <a href="#">FB</a>
        <a href="#">TW</a>
        <a href="#">IG</a>
      </div>
    </footer>
  );
}
