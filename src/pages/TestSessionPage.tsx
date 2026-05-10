import {
  Clock3,
  Check,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

const mockQuestion = {
  question:
    "Amir Temur qaysi yilda tavallud topgan?",
  options: [
    "1336",
    "1405",
    "1220",
    "1451",
  ],
};

export default function TestSessionPage() {
  const [selected, setSelected] =
    useState<number | null>(null);

  return (
    <div className="relative pt-6 space-y-6 overflow-hidden min-h-screen">
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
        bottom-0
        right-0
        w-72
        h-72
        rounded-full
        bg-yellow-500/20
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
        <div>
          <p className="text-gray-400">
            Savol 4 / 20
          </p>

          <h1
            className="
            text-3xl
            font-bold
            mt-1
          "
          >
            Tarix testi
          </h1>
        </div>

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
            className="
            text-yellow-400
          "
          />

          <span className="font-bold">
            12:45
          </span>
        </div>
      </motion.div>

      {/* PROGRESS */}
      <div
        className="
        relative
        z-10
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
          w-[20%]
          rounded-full
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
        "
        />
      </div>

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
        className="
        relative
        z-10
        rounded-[32px]
        p-6
        bg-gradient-to-br
        from-[#132238]
        to-[#09111d]
        border
        border-white/10
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
          {mockQuestion.question}
        </p>
      </motion.div>

      {/* OPTIONS */}
      <div className="relative z-10 space-y-4">
        {mockQuestion.options.map(
          (
            option,
            index
          ) => {
            const active =
              selected === index;

            return (
              <motion.button
                key={index}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() =>
                  setSelected(index)
                }
                className={`
                  w-full
                  rounded-3xl
                  p-5
                  text-left
                  transition-all
                  border
                  backdrop-blur-xl

                  ${
                    active
                      ? `
                        bg-yellow-400/15
                        border-yellow-400
                        shadow-lg
                        shadow-yellow-500/20
                      `
                      : `
                        bg-white/5
                        border-white/10
                      `
                  }
                `}
              >
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
                    <div
                      className={`
                        w-10
                        h-10
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        font-bold

                        ${
                          active
                            ? `
                              bg-yellow-400
                              text-black
                            `
                            : `
                              bg-white/10
                            `
                        }
                      `}
                    >
                      {String.fromCharCode(
                        65 + index
                      )}
                    </div>

                    <p
                      className="
                      text-lg
                      font-medium
                    "
                    >
                      {option}
                    </p>
                  </div>

                  {active && (
                    <Check
                      className="
                      text-yellow-400
                    "
                    />
                  )}
                </div>
              </motion.button>
            );
          }
        )}
      </div>

      {/* BUTTON */}
      <div className="relative z-10 pb-24">
        <button
          className="
          w-full
          py-5
          rounded-3xl
          bg-yellow-400
          text-black
          text-lg
          font-bold
          shadow-2xl
          shadow-yellow-500/30
        "
        >
          Keyingi savol
        </button>
      </div>
    </div>
  );
}