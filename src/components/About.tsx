import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="px-8 mx-auto max-w-6xl sm:px-20">
        <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
          Бидний тухай
        </h2>

        <div className="grid gap-12 items-center md:grid-cols-2">
          <div>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Legoblock.mn нь 2021 онд байгуулагдсан бөгөөд барилгын салбарын
                дэвшилтэт, байгальд ээлтэй технологиор үйлдвэрлэл явуулж буй
                үндэсний үйлдвэр юм. Бид олон улсын стандартын дагуу үйлдвэрлэл
                явуулж, ISO 9001 чанарын менежментийн систем нэвтрүүлсэн. Манай
                бүтээгдэхүүнүүд барилгын норм, стандартын дагуу туршигдаж
                баталгаажсан.
              </p>
            </div>

            <div className="mt-8">
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-lg h-12 px-8 inline-flex text-white"
                href="#"
              >
                Илүү ихийг мэдэх
              </a>
            </div>
          </div>

          <div className="rounded-lg">
            <Image
              src="/images/blog-lego-blocks.svg"
              alt="Бидний тухай"
              width={600} // Add appropriate width
              height={400} // Add appropriate height
              className="object-cover w-full h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
