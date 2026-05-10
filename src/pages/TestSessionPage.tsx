import {
  Clock3,
  ChevronLeft,
  Flag,
} from "lucide-react";

import { motion } from "framer-motion";

const answers = [
  "Sovet Ittifoqi",
  "Rossiya imperiyasi",
  "Rossiya Respublikasi",
  "Sotsialistik davlat",
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
        {/* LEFT */}
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
          1917-yil fevral
          inqilobi natijasida
          Rossiyada qaysi
          davlat tuzildi?
        </p>
      </motion.div>

      {/* ANSWERS */}
      <div
        className="
        relative
        z-10
        mt-6
        space-y-4
      "
      >
        {answers.map(
          (answer, index) => {
            const isCorrect =
              index === 2;

            return (
              <motion.button
                key={index}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  w-full
                  rounded-[28px]
                  border
                  p-5
                  text-left
                  transition-all

                  ${
                    isCorrect
                      ? `
                    border-green-500/30
                    bg-green-500/10
                  `
                      : `
                    border-white/10
                    bg-white/[0.03]
                  `
                  }
                `}
              >
                <div
                  className="
                  flex
                  items-center
                  gap-4
                "
                >
                  {/* RADIO */}
                  <div
                    className={`
                    w-6
                    h-6
                    rounded-full
                    border
                    flex
                    items-center
                    justify-center

                    ${
                      isCorrect
                        ? `
                      border-green-400
                      bg-green-400
                    `
                        : `
                      border-white/20
                    `
                    }
                  `}
                  >
                    {isCorrect && (
                      <div
                        className="
                        w-2
                        h-2
                        rounded-full
                        bg-black
                      "
                      />
                    )}
                  </div>

                  {/* TEXT */}
                  <span
                    className="
                    text-lg
                    font-medium
                  "
                  >
                    {String.fromCharCode(
                      65 + index
                    )}
                    )
                    {" "}
                    {answer}
                  </span>
                </div>
              </motion.button>
            );
          }
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

        {/* NEXT */}
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
          Keyingi →
        </button>
      </motion.div>
    </div>
  );
}