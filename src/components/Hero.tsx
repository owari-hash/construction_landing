"use client";

import React from "react";
import { ANCHORS } from "@/routes/paths";
import Container from "@/layouts/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-16 px-4 sm:py-20 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <main className="flex flex-col gap-8 items-center md:items-start order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-center md:text-left leading-tight">
              Legoblock.mn –{" "}
              <span className="text-primary">Дулааны алдагдалгүй</span>, хурдан
              барилгын шийдэл
            </h1>

            <div className="text-lg space-y-6">
              <p className="text-gray-700">
                Legoblock.mn нь Монгол орны эрс тэс уур амьсгалд төгс тохирох,
                дулаан тусгаарлах өндөр үзүүлэлттэй, хямд өртгөөр хурдан
                угсрагдах полистрол (EPS) лего блок үйлдвэрлэдэг үндэсний
                үйлдвэр юм.
              </p>

              <p className="text-gray-700">
                Бид барилгын зардлыг{" "}
                <span className="font-semibold">30-50% хүртэл бууруулах</span>{" "}
                боломжтой эко шийдлүүдийг санал болгож, таны байшинг эрчим хүч
                хэмнэдэг ухаалаг орон сууц болгоход тань тусална.
              </p>
            </div>

            <div className="flex gap-4 items-center flex-col sm:flex-row w-full sm:w-auto">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-primary-foreground gap-2 hover:bg-primary/90 font-medium text-lg h-12 px-8 w-full sm:w-auto"
                href={ANCHORS.CONTACT}
              >
                Холбоо барих
              </a>
              <a
                className="rounded-full border border-solid border-primary/20 transition-colors flex items-center justify-center hover:bg-primary/5 hover:border-primary/30 font-medium text-lg h-12 px-8 w-full sm:w-auto"
                href={ANCHORS.PRODUCTS}
              >
                Бүтээгдэхүүн
              </a>
            </div>
          </main>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl opacity-50"></div>
              <Image
                src="/images/hero-building.svg"
                alt="Legoblock Building"
                width={500}
                height={500}
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
