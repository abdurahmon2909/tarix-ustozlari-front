import {
  BookOpen,
  Search,
  Flame,
} from "lucide-react";

import { motion } from "framer-motion";

const books = [
  {
    id: 1,
    title: "O‘zbekiston tarixi",
    grade: "10-sinf",
    chapters: 24,
    color:
      "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: 2,
    title: "Jahon tarixi",
    grade: "11-sinf",
    chapters: 18,
    color:
      "from-purple-500/20 to-pink-500/10",
  },
  {
    id: 3,
    title: "Qadimgi dunyo",
    grade: "7-sinf",
    chapters: 15,
    color:
      "from-orange-500/20 to-yellow-500/10",
  },
];

export default function BooksPage() {
  return (
    <div className="relative pt-6 space-y-6 overflow-hidden">
      {/* GLOWS */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        rounded-full
        bg-blue-500/20
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        top-40
        right-0
        w-72
        h-72
        rounded-full
        bg-purple-500/20
        blur-[120px]
      "
      />

      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        relative
        z-10
      "
      >
        <p className="text-gray-400">
          Tarix kitoblari
        </p>

        <h1
          className="
          text-4xl
          font-bold
          mt-2
        "
        >
          Kitoblar 📚
        </h1>
      </motion.div>

      {/* SEARCH */}
      <div
        className="
        relative
        z-10
        flex
        items-center
        gap-3
        px-5
        py-4
        rounded-3xl
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
      "
      >
        <Search
          className="
          text-gray-400
        "
        />

        <input
          placeholder="Kitob qidirish..."
          className="
          bg-transparent
          outline-none
          w-full
          text-white
          placeholder:text-gray-500
        "
        />
      </div>

      {/* DAILY BOOK */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-5
        bg-gradient-to-br
        from-[#132238]
        to-[#09111d]
        border
        border-yellow-500/20
        shadow-2xl
        shadow-yellow-500/10
      "
      >
        <div
          className="
          flex
          items-center
          gap-4
        "
        >
          <div
            className="
            w-16
            h-16
            rounded-3xl
            bg-yellow-500/20
            flex
            items-center
            justify-center
          "
          >
            <Flame
              className="
              text-yellow-400
            "
            />
          </div>

          <div>
            <p className="text-gray-400">
              Tavsiya etilgan
            </p>

            <h2
              className="
              text-2xl
              font-bold
              mt-1
            "
            >
              Temuriylar davri
            </h2>
          </div>
        </div>

        <button
          className="
          mt-5
          w-full
          py-4
          rounded-2xl
          bg-yellow-400
          text-black
          font-bold
        "
        >
          O‘qishni boshlash
        </button>
      </div>

      {/* BOOK LIST */}
      <div className="relative z-10 space-y-5">
        {books.map(
          (
            book,
            index
          ) => (
            <motion.div
              key={book.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  index * 0.05,
              }}
              className={`
                rounded-3xl
                p-5
                bg-gradient-to-br
                ${book.color}
                border
                border-white/10
                backdrop-blur-xl
              `}
            >
              <div
                className="
                flex
                items-start
                justify-between
              "
              >
                <div>
                  <p className="text-gray-300">
                    {book.grade}
                  </p>

                  <h2
                    className="
                    text-3xl
                    font-bold
                    mt-2
                  "
                  >
                    {book.title}
                  </h2>
                </div>

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                "
                >
                  <BookOpen />
                </div>
              </div>

              <div
                className="
                flex
                items-center
                justify-between
                mt-8
              "
              >
                <div>
                  <p className="text-gray-300">
                    Boblar
                  </p>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-1
                  "
                  >
                    {book.chapters}
                  </h3>
                </div>

                <button
                  className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-white
                  text-black
                  font-bold
                "
                >
                  Ochish
                </button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}