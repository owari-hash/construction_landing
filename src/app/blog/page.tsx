import React from "react";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="pt-20 font-[family-name:var(--font-geist-sans)]">
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="px-8 mx-auto max-w-6xl sm:px-20">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Блог</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Барилгын салбарын сүүлийн үеийн мэдээ, мэдээлэл, зөвлөгөө.
          </p>
        </div>
      </div>

      <Blog />
      <Footer />
    </div>
  );
}
