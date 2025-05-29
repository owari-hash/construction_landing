"use client";

import React from "react";
import SendIcon from "@mui/icons-material/Send";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@mui/material/Button"), { ssr: false });

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="px-8 mx-auto max-w-4xl sm:px-20">
        <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
          Холбоо барих
        </h2>

        <div className="grid gap-12 text-white md:grid-cols-2">
          <div>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Та манай бүтээгдэхүүн, үйлчилгээний талаар асуух зүйл байвал
                бидэнтэй холбоо барина уу. Бид таны асуултанд хариулахад таатай
                байх болно.
              </p>

              <div className="space-y-4">
                <p className="flex gap-3 items-center">
                  Хаяг:
                  <span>
                    Улаанбаатар, Хан-Уул дүүрэг, 2-р хороо, Үйлдвэрийн гудамж 5
                  </span>
                </p>
                <p className="flex gap-3 items-center">
                  Утас:
                  <span>+976 9911-2233</span>
                </p>
                <p className="flex gap-3 items-center">
                  И-мэйл:
                  <span>info@legoblock.mn</span>
                </p>
                <p className="flex gap-3 items-center">
                  Ажлын цаг:
                  <span>Даваа-Баасан: 09:00-18:00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium"
                >
                  Нэр
                </label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Таны нэр"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm font-medium"
                >
                  Утасны дугаар
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Утасны дугаар"
                />
              </div>

              <div>
                <label
                  htmlFor="blockType"
                  className="block mb-1 text-sm font-medium"
                >
                  Блокын төрөл
                </label>
                <select
                  id="blockType"
                  className="px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Сонгоно уу</option>
                  <option value="standard">Стандарт Лего Блок</option>
                  <option value="insulated">Дулаалгатай Лего Блок</option>
                  <option value="lightweight">Хөнгөн Блок</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block mb-1 text-sm font-medium"
                >
                  Хэмжээ (м2)
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Шаардлагатай хэмжээ"
                />
              </div>

              <Button variant="contained" endIcon={<SendIcon />}>
                Илгээх
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
