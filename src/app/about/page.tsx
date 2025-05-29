import React from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="pt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-8 sm:px-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Бидний тухай</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Legoblock.mn нь 2018 онд байгуулагдсан бөгөөд Монголын барилгын
            салбарт шинэ технологи нэвтрүүлэх зорилготой үндэсний компани юм.
          </p>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
}
