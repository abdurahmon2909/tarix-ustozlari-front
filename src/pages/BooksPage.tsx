import {
  BookOpen,
  Sparkles,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion";

const classes = [
  {
    title: "5-SINF",
    books: 2,
  },

  {
    title: "6-SINF",
    books: 2,
  },

  {
    title: "7-SINF",
    books: 3,
  },

  {
    title: "8-SINF",
    books: 3,
  },
];

const books = [
  {
    title:
      "O‘zbekiston tarixi",
    chapters: 12,
    progress: 68,
  },

  {
    title: "Jahon tarixi",
    chapters: 10,
    progress: 42,
  },
];

export default function BooksPage() {
  return (
    <div className="relative pb-10">
      {/* BG */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-80
        h-80
        rounded-full
        bg-blue-500/10
        blur-[120px]
      "
      />

      {/* HERO */}
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
        <div
          className="
          overflow-hidden
          rounded-[36px]
          border
          border-blue-500/20
          bg-gradient-to-br
          from-[#132238]
          via-[#101c2f]
          to-[#0a1422]
          p-6
          shadow-2xl
          shadow-blue-500/10
        "
        >
          {/* BADGE */}
          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-500/10
            px-4
            py-2
            text-blue-300
            text-sm
            font-semibold
          "
          >
            <BookOpen size={16} />

            PREMIUM BOOKS
          </div>

          {/* TITLE */}
          <h1
            className="
            mt-5
            text-4xl
            font-black
            leading-tight
          "
          >
            Tarix
            kutubxonasi
          </h1>

          <p
            className="
            mt-4
            text-gray-400
            leading-relaxed
          "
          >
            Sinflar, kitoblar
            va boblar bo‘yicha
            test ishlang
          </p>

          {/* CTA */}
          <button
            className="
            mt-8
            w-full
            h-16
            rounded-2xl
            bg-gradient-to-r
            from-blue-500
            to-cyan-500
            text-white
            text-lg
            font-black
            shadow-xl
            shadow-blue-500/20
          "
          >
            📚 Test ishlashni boshlash
          </button>
        </div>
      </motion.div>

      {/* CLASSES */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="
        relative
        z-10
        mt-8
      "
      >
        {/* TITLE */}
        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          <h2
            className="
            text-2xl
            font-black
          "
          >
            Sinflar
          </h2>

          <button
            className="
            text-sm
            text-blue-300
          "
          >
            Barchasi
          </button>
        </div>

        {/* GRID */}
        <div
          className="
          mt-4
          grid
          grid-cols-2
          gap-4
        "
        >
          {classes.map(
            (
              item,
              index
            ) => (
              <motion.div
                key={index}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-5
              "
              >
                {/* ICON */}
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-500/10
                  flex
                  items-center
                  justify-center
                "
                >
                  <GraduationCap
                    className="
                    text-blue-400
                  "
                  />
                </div>

                {/* TEXT */}
                <h3
                  className="
                  mt-5
                  text-xl
                  font-black
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-2
                  text-sm
                  text-gray-400
                "
                >
                  {
                    item.books
                  }{" "}
                  ta kitob
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* BOOKS */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
        relative
        z-10
        mt-8
      "
      >
        {/* TITLE */}
        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          <h2
            className="
            text-2xl
            font-black
          "
          >
            Kitoblar
          </h2>

          <button
            className="
            text-sm
            text-blue-300
          "
          >
            Ko‘proq
          </button>
        </div>

        {/* LIST */}
        <div
          className="
          mt-4
          space-y-4
        "
        >
          {books.map(
            (
              item,
              index
            ) => (
              <motion.div
                key={index}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-5
              "
              >
                {/* TOP */}
                <div
                  className="
                  flex
                  items-center
                  justify-between
                "
                >
                  <div
                    className="
                    flex
                    items-center
                    gap-4
                  "
                  >
                    {/* ICON */}
                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                    "
                    >
                      <BookOpen
                        className="
                        text-blue-400
                      "
                      />
                    </div>

                    {/* INFO */}
                    <div>
                      <h3
                        className="
                        text-lg
                        font-semibold
                      "
                      >
                        {
                          item.title
                        }
                      </h3>

                      <p
                        className="
                        mt-1
                        text-sm
                        text-gray-400
                      "
                      >
                        {
                          item.chapters
                        }{" "}
                        ta bob
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className="
                    text-gray-500
                  "
                  />
                </div>

                {/* PROGRESS */}
                <div className="mt-6">
                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    mb-2
                  "
                  >
                    <p
                      className="
                      text-sm
                      text-gray-400
                    "
                    >
                      Progress
                    </p>

                    <p
                      className="
                      text-sm
                      text-blue-300
                    "
                    >
                      {
                        item.progress
                      }
                      %
                    </p>
                  </div>

                  <div
                    className="
                    w-full
                    h-3
                    rounded-full
                    bg-white/10
                    overflow-hidden
                  "
                  >
                    <div
                      className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-400
                    "
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* AI TEST */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="
        relative
        z-10
        mt-8
      "
      >
        <div
          className="
          rounded-[32px]
          border
          border-cyan-500/20
          bg-gradient-to-br
          from-cyan-500/10
          to-blue-500/10
          p-6
        "
        >
          <div
            className="
            flex
            items-start
            gap-4
          "
          >
            {/* ICON */}
            <div
              className="
              w-16
              h-16
              rounded-3xl
              bg-cyan-500/10
              flex
              items-center
              justify-center
            "
            >
              <Sparkles
                size={32}
                className="
                text-cyan-300
              "
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <h3
                className="
                text-2xl
                font-black
              "
              >
                AI Test Generator
              </h3>

              <p
                className="
                mt-3
                text-gray-300
                leading-relaxed
              "
              >
                Kitob boblari
                asosida avtomatik
                savollar yarating
              </p>

              <button
                className="
                mt-6
                h-14
                px-6
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-white
                font-bold
              "
              >
                ✨ AI orqali yaratish
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}