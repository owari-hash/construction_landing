import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-8 sm:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Төслүүд</h2>

        <div className="text-lg mb-8 text-gray-700 dark:text-black">
          Манай лего блок технологийг ашиглан баригдсан амжилттай төслүүдийг
          танилцуулж байна. Эдгээр төслүүд нь манай бүтээгдэхүүний чанар,
          найдвартай байдал, үр ашгийг харуулж байна.
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="/images/project-family-house.svg"
              alt="Гэр бүлийн амины орон сууц"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Гэр бүлийн амины орон сууц
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Улаанбаатар хотын Яармаг дүүрэгт 120м² талбайтай 2 давхар амины
                орон сууц. Барилгын ажил 45 хоногт дууссан бөгөөд дулааны
                алдагдал 60%-иар бага.
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Дэлгэрэнгүй
              </a>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="/images/project-shopping-center.svg"
              alt="Худалдааны төв"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Худалдааны төв</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Дархан хотод 500м² талбайтай худалдааны төв. Уламжлалт барилгын
                аргаас 40% хямд өртгөөр, 2 дахин хурдан баригдсан.
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
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
