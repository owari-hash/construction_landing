import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-8 sm:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Холбоо барих</h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="text-lg space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                Та манай бүтээгдэхүүн, үйлчилгээний талаар асуух зүйл байвал
                бидэнтэй холбоо барина уу. Бид таны асуултанд хариулахад таатай
                байх болно.
              </p>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="font-medium">Хаяг:</span>
                  <span>
                    Улаанбаатар, Хан-Уул дүүрэг, 2-р хороо, Үйлдвэрийн гудамж 5
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium">Утас:</span>
                  <span>+976 9911-2233</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium">И-мэйл:</span>
                  <span>info@legoblock.mn</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium">Ажлын цаг:</span>
                  <span>Даваа-Баасан: 09:00-18:00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Нэр
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Таны нэр"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  И-мэйл
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="И-мэйл хаяг"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Мессеж
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Таны мессеж"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-lg h-12 px-8"
              >
                Илгээх
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
