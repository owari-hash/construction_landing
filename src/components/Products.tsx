import React from "react";

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-8 sm:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Бүтээгдэхүүнүүд</h2>

        <div className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Манай лего блок бүтээгдэхүүнүүд нь барилгын чанарыг дээшлүүлэх,
          дулааны алдагдлыг бууруулах, барилгын хугацааг хэмнэх зорилготойгоор
          бүтээгдсэн. Стандартад нийцсэн, бат бөх, угсралт хялбар эдгээр блокыг
          Монголын нөхцөлд онцгой тохируулан үйлдвэрлэж байна.
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Стандарт Лего Блок</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Хэмжээ:</span> 400x200x200мм
              </p>
              <p>
                <span className="font-medium">Жин:</span> 12кг
              </p>
              <p>
                <span className="font-medium">Үнэ:</span> 6000₮
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Ерөнхий зориулалтын барилгад тохиромжтой. Бага зардлаар хурдан
              угсрах боломжтой бөгөөд хана босгох хугацааг 50% хүртэл багасгана.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Дулаалгатай Лего Блок</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Хэмжээ:</span> 400x200x250мм
              </p>
              <p>
                <span className="font-medium">Үнэ:</span> 7500₮
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Блок доторх полистрол дулаан тусгаарлагч нь гадна ханыг давхар
              дулаалах шаардлагагүй болгодог. Эрчим хүчний хэмнэлтийн хамгийн
              сайн хувилбар.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Хөнгөн Блок</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Хэмжээ:</span> 400x150x200мм
              </p>
              <p>
                <span className="font-medium">Үнэ:</span> 5800₮
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Дотор хана болон тасалгааны зориулалтаар ашиглахад тохиромжтой.
              Хөнгөн жинтэй, зөөвөрлөх, угсрахад хялбар.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
