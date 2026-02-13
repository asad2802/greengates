"use client";
import { motion } from "framer-motion";
import { Coffee, Phone, Clock, Instagram } from "lucide-react";

export default function Home() {
  const menu = [
    "Cafe Mocha",
    "Loaded Nachos",
    "Chicken Strips",
    "Peppery Cheese Toast",
    "Chicken Crostini",
    "Cream of Mushroom",
    "Shawarma",
    "Chocolate Bomb",
    "Veggie Burger",
    "Lemon Iced Tea",
  ];

  const gallery = [
    "/images/entrance1.webp",
    "/images/entrance2.webp",
    "/images/ambience1.webp",
    "/images/ambience2.webp",
    "/images/cafe2.webp",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-zinc-900 to-black text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img src="/images/entrance1.webp" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
        <div className="relative z-10 px-6">
          <h1 className="text-6xl font-bold">Green Gates</h1>
          <p className="mt-6 text-zinc-300">Rustic Portuguese bungalow café in Belagavi</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Ambience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((img, i) => (
            <motion.img key={i} whileHover={{scale:1.05}} src={img} className="rounded-2xl h-72 w-full object-cover"/>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section className="py-20 bg-black/40">
        <h2 className="text-4xl text-center mb-12">Menu Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
          {menu.map((item,i)=>(
            <div key={i} className="bg-zinc-900 p-8 rounded-2xl text-center">
              <Coffee className="mx-auto mb-4"/>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl mb-4">Find Us</h2>
          <p className="text-zinc-400">1, Havelock Rd, Camp, Belagavi</p>
          <p className="mt-3 flex gap-2"><Clock/> Open till 10 PM</p>
          <p className="flex gap-2"><Phone/> +91 72594 25952</p>
        </div>
        <iframe className="rounded-2xl w-full h-[400px]"
          src="https://maps.google.com/maps?q=Green%20Gates%20Belagavi&t=&z=15&ie=UTF8&iwloc=&output=embed"/>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 text-center">
        <h2 className="text-4xl mb-6">Follow Us</h2>
        <button className="bg-white text-black px-6 py-3 rounded-xl flex gap-2 mx-auto">
          <Instagram/> Visit Instagram
        </button>
      </section>

    </div>
  );
}
