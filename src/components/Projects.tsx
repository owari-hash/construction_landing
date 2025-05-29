import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="px-8 mx-auto max-w-6xl sm:px-20">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Төслүүд</h2>

        <div className="mb-8 text-lg text-gray-700 dark:text-black">
          Манай лего блок технологийг ашиглан баригдсан амжилттай төслүүдийг
          танилцуулж байна. Эдгээр төслүүд нь манай бүтээгдэхүүний чанар,
          найдвартай байдал, үр ашгийг харуулж байна.
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow dark:border-gray-800 hover:shadow-md">
            <Image
              src="/images/project-family-house.svg"
              alt="Нисэх дэх эко хаус"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Жишээ кейс 1: “Нисэх дэх эко хаус”
              </h3>
              <p className="mb-4 text-black dark:text-black">
                2024 онд Улаанбаатар хотын Нисэх дүүрэгт 120м² талбайтай амины
                орон сууцны барилгад Legoblock ашигласан.
                <br />
                <strong>
                  <span className="text-black">Барилгын хугацаа: </span>
                </strong>
                18 хоног
                <br />
                <strong>
                  <span className="text-black">Зардал: </span>
                </strong>
                30% хэмнэлт
                <br />
                <strong>
                  <span className="text-black">Өвлийн дулааны хэрэглээ: </span>
                </strong>
                Стандарт байшингаас 40% бага
                <br />
                <strong>
                  <span className="text-black">Хэрэглэгч: </span>
                </strong>
                “Халаалтын зардал эрс багасаж, барилгын ажил богино хугацаанд
                дууссан.”
              </p>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Дэлгэрэнгүй
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow dark:border-gray-800 hover:shadow-md">
            <Image
              src="/images/project-shopping-center.svg"
              alt="Орхон аймгийн сургуулийн өргөтгөл"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Жишээ кейс 2: “Орхон аймгийн сургуулийн өргөтгөл”
              </h3>
              <p className="mb-4 text-black dark:text-black">
                2023 онд Эрдэнэт хотод 4 ангийн өргөтгөлд Legoblock ашиглаж,
                нийт төсвийн 1/3-ийг хэмнэсэн.
              </p>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Дэлгэрэнгүй
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
