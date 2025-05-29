import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="py-16">
      <div className="max-w-4xl mx-auto px-8 sm:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Блог</h2>

        <div className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Барилгын салбарын сүүлийн үеийн мэдээ, мэдээлэл, зөвлөгөө.
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2023-12-15
              </span>
              <h3 className="text-xl font-semibold my-2">
                Эрчим хүчний хэмнэлттэй барилга
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Монгол орны нөхцөлд эрчим хүчний хэмнэлттэй барилга барих арга,
                технологиуд.
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Унших
              </a>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2023-11-20
              </span>
              <h3 className="text-xl font-semibold my-2">
                Лего блокын давуу талууд
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Уламжлалт барилгын материалтай харьцуулсан лего блокын давуу
                талууд.
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Унших
              </a>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2023-10-05
              </span>
              <h3 className="text-xl font-semibold my-2">
                Өөрөө барилга барих зөвлөгөө
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Лего блок ашиглан өөрөө барилга барих алхам алхмаар зөвлөгөө.
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Унших
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
