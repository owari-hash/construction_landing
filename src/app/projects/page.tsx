import React from "react";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="pt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-8 sm:px-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Төслүүд</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Манай лего блок технологийг ашиглан баригдсан амжилттай төслүүдийг
            танилцуулж байна. Эдгээр төслүүд нь манай бүтээгдэхүүний чанар,
            найдвартай байдал, үр ашгийг харуулж байна.
          </p>
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}
