import React from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="pt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="px-8 mx-auto sm:px-20">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Бидний тухай</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-10xl">
            Legoblock.mn нь 2021 онд байгуулагдсан бөгөөд барилгын салбарын
            дэвшилтэт, байгальд ээлтэй технологиор үйлдвэрлэл явуулж буй
            үндэсний үйлдвэр юм. Бид олон улсын стандартын дагуу үйлдвэрлэл
            явуулж, ISO 9001 чанарын менежментийн систем нэвтрүүлсэн. Манай
            бүтээгдэхүүнүүд барилгын норм, стандартын дагуу туршигдаж
            баталгаажсан.
          </p>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
}
