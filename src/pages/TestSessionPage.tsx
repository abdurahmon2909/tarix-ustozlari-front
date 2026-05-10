import {
  Clock3,
  ChevronLeft,
  Flag,
} from "lucide-react";

import { motion } from "framer-motion";

const matchingQuestions = [
  {
    left: "Islom Karimov",
    right:
      "O‘zbekiston birinchi Prezidenti",
  },
  {
    left: "Amir Temur",
    right:
      "Buyuk sarkarda va davlat arbobi",
  },
  {
    left: "Buxoro amirligi",
    right:
      "XIX asrda Markaziy Osiyoda mavjud davlat",
  },
  {
    left: "1917-yil fevral inqilobi",
    right:
      "Rossiyada yuz bergan inqilob",
  },
];

export default function TestSessionPage() {
  return (
    <div className="relative pt-2 pb-10">
      {/* BACKGROUND */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        rounded-full
        bg-yellow-500/10
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
        flex
        items-center
        justify-between
      "
      >
        {/* BACK */}
        <button
          className="
          w-12
          h-12
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
        "
        >
          <ChevronLeft size={22} />
        </button>

        {/* TITLE */}
        <div className="text-center">
          <p
            className="
            text-sm
            text-gray-400
          "
          >
            Test:
            O‘zbekiston tarixi
          </p>

          <h2
            className="
            text-lg
            font-bold
            mt-1
          "
          >
            7 / 30
          </h2>
        </div>

        {/* TIMER */}
        <div
          className="
          px-4
          py-3
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          gap-2
        "
        >
          <Clock3
            size={18}
            className="
            text-yellow-400
          "
          />

          <span
            className="
            text-sm
            font-medium
          "
          >
            24:35
          </span>
        </div>
      </motion.div>

      {/* PROGRESS */}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.8,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        className="
        relative
        z-10
        mt-6
      "
      >
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
            w-[23%]
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            to-yellow-600
          "
          />
        </div>
      </motion.div>

      {/* QUESTION */}
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
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-br
        from-[#132238]
        to-[#0a1422]
        p-6
        shadow-2xl
        shadow-blue-500/10
      "
      >
        <p
          className="
          text-2xl
          leading-relaxed
          font-semibold
        "
        >
          Quyidagi tarixiy
          atamalarni to‘g‘ri
          izohlar bilan
          moslashtiring.
        </p>
      </motion.div>

      {/* MATCHING */}
      <div
        className="
        relative
        z-10
        mt-6
        space-y-4
      "
      >
        {matchingQuestions.map(
          (item, index) => (
            <motion.div
              key={index}
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
                  0.1 +
                  index * 0.05,
              }}
              className="
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
            "
            >
              <div
                className="
                flex
                flex-col
                gap-4
              "
              >
                {/* LEFT */}
                <div
                  className="
                  rounded-2xl
                  bg-white/[0.03]
                  border
                  border-white/10
                  px-4
                  py-4
                  text-lg
                  font-semibold
                "
                >
                  {item.left}
                </div>

                {/* SELECT */}
                <select
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0f1725]
                  px-4
                  py-4
                  text-white
                  outline-none
                "
                >
                  <option>
                    Tanlang
                  </option>

                  {matchingQuestions.map(
                    (
                      option,
                      optionIndex
                    ) => (
                      <option
                        key={
                          optionIndex
                        }
                      >
                        {option.right}
                      </option>
                    )
                  )}
                </select>
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* ACTIONS */}
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
        grid
        grid-cols-2
        gap-4
      "
      >
        {/* FLAG */}
        <button
          className="
          h-16
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          flex
          items-center
          justify-center
          gap-3
          font-medium
        "
        >
          <Flag size={18} />

          Belgilash
        </button>

        {/* CHECK */}
        <button
          className="
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
          text-black
          font-bold
          text-lg
          shadow-xl
          shadow-yellow-500/20
        "
        >
          Tekshirish
        </button>
      </motion.div>
    </div>
  );
}