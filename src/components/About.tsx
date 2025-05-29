import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-8 sm:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Бидний тухай</h2>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-lg space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                Legoblock.mn нь 2018 онд байгуулагдсан бөгөөд Монголын барилгын
                салбарт шинэ технологи нэвтрүүлэх зорилготой үндэсний компани
                юм.
              </p>
              <p>
                Бид Монгол орны эрс тэс уур амьсгалд тохирсон, эрчим хүчний
                хэмнэлттэй, хурдан угсардаг барилгын материал үйлдвэрлэх
                чиглэлээр тэргүүлж байна.
              </p>
              <p>
                Манай баг нь барилгын инженер, архитектор, материал судлаач
                зэрэг мэргэжилтнүүдээс бүрддэг бөгөөд бид Монголын барилгын
                салбарт инновацийг авчрахын төлөө ажилладаг.
              </p>
            </div>

            <div className="mt-8">
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-lg h-12 px-8 inline-flex"
                href="#"
              >
                Илүү ихийг мэдэх
              </a>
            </div>
          </div>

          <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
