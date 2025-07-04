import React from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="pt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="px-8 mx-auto max-w-4xl sm:px-20">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Холбоо барих</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Та манай бүтээгдэхүүн, үйлчилгээний талаар асуух зүйл байвал
            бидэнтэй холбоо барина уу. Бид таны асуултанд хариулахад таатай байх
            болно.
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
