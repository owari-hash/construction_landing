import React from "react";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <div className="pt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-8 sm:px-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Бүтээгдэхүүнүүд
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Манай лего блок бүтээгдэхүүнүүд нь барилгын чанарыг дээшлүүлэх,
            дулааны алдагдлыг бууруулах, барилгын хугацааг хэмнэх зорилготойгоор
            бүтээгдсэн.
          </p>
        </div>
      </div>

      <Products />
      <Footer />
    </div>
  );
}
