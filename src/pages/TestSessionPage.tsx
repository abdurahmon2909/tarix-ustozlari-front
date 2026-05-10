import {
  Clock3,
  ChevronLeft,
  Flag,
  Check,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

/* =========================
   QUESTION TYPE
========================= */

type QuestionType =
  | "mcq"
  | "matching"
  | "chronology";

/* =========================
   ACTIVE TYPE
========================= */

// BU YERNI O‘ZGARTIRIB TEST QILING:
// "mcq"
// "matching"
// "chronology"

const questionType: QuestionType =
  "mcq";

/* =========================
   MCQ DATA
========================= */

const mcqAnswers = [
  "Sovet Ittifoqi",
  "Rossiya imperiyasi",
  "Rossiya Respublikasi",
  "Sotsialistik davlat",
];

const selectedAnswer = 2;
const correctAnswer = 2;

/* =========================
   MATCHING DATA
========================= */

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

/* =========================
   CHRONOLOGY DATA
========================= */

const chronologyEvents = [
  "Amir Temur tavalludi",
  "Temuriylar davlati tashkil topdi",
  "Anqara jangi",
  "Amir Temur vafoti",
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

      {/* =========================
          MCQ
      ========================= */}

      {questionType === "mcq" && (
        <>
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
            {mcqAnswers.map(
              (answer, index) => (
                <motion.button
                  key={index}
                  whileTap={{
                    scale: 0.98,
                  }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className={`
                    relative
                    overflow-hidden
                    w-full
                    rounded-[28px]
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300

                    ${
                      index ===
                      correctAnswer
                        ? `
                        border-green-500/40
                        bg-green-500/10
                      `
                        : index ===
                          selectedAnswer
                        ? `
                        border-red-500/40
                        bg-red-500/10
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
                    justify-between
                    gap-4
                  "
                  >
                    {/* LEFT */}
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
                        w-7
                        h-7
                        rounded-full
                        border
                        flex
                        items-center
                        justify-center

                        ${
                          index ===
                          correctAnswer
                            ? `
                            border-green-400
                            bg-green-400
                          `
                            : index ===
                              selectedAnswer
                            ? `
                            border-red-400
                            bg-red-400
                          `
                            : `
                            border-white/20
                          `
                        }
                      `}
                      >
                        {index ===
                          correctAnswer && (
                          <Check
                            size={14}
                            className="
                            text-black
                          "
                          />
                        )}

                        {index ===
                          selectedAnswer &&
                          index !==
                            correctAnswer && (
                            <X
                              size={14}
                              className="
                              text-black
                            "
                            />
                          )}
                      </div>

                      {/* TEXT */}
                      <span
                        className="
                        text-lg
                        font-medium
                        leading-relaxed
                      "
                      >
                        {String.fromCharCode(
                          65 + index
                        )}
                        ){" "}
                        {answer}
                      </span>
                    </div>

                    {/* STATUS */}
                    {index ===
                      correctAnswer && (
                      <div
                        className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-green-500/20
                        text-green-400
                        text-xs
                        font-semibold
                      "
                      >
                        To‘g‘ri
                      </div>
                    )}
                  </div>
                </motion.button>
              )
            )}
          </div>
        </>
      )}

      {/* =========================
          MATCHING
      ========================= */}

      {questionType ===
        "matching" && (
        <>
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
              atamalarni
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
                "
                >
                  <div
                    className="
                    flex
                    flex-col
                    gap-4
                  "
                  >
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
                            {
                              option.right
                            }
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </>
      )}

      {/* =========================
          CHRONOLOGY
      ========================= */}

      {questionType ===
        "chronology" && (
        <>
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
          "
          >
            <p
              className="
              text-2xl
              leading-relaxed
              font-semibold
            "
            >
              Voqealarni
              ketma-ketlikda
              joylashtiring.
            </p>
          </motion.div>

          {/* CHRONOLOGY */}
          <div
            className="
            relative
            z-10
            mt-6
            space-y-4
          "
          >
            {chronologyEvents.map(
              (event, index) => (
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
                  <div
                    className="
                    flex
                    items-center
                    gap-4
                  "
                  >
                    {/* NUMBER */}
                    <div
                      className="
                      min-w-[52px]
                      h-[52px]
                      rounded-2xl
                      bg-gradient-to-br
                      from-yellow-400
                      to-yellow-600
                      flex
                      items-center
                      justify-center
                      text-black
                      text-xl
                      font-black
                    "
                    >
                      {index + 1}
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <p
                        className="
                        text-lg
                        leading-relaxed
                        font-semibold
                      "
                      >
                        {event}
                      </p>
                    </div>

                    {/* DRAG */}
                    <div
                      className="
                      flex
                      flex-col
                      gap-1
                      opacity-40
                    "
                    >
                      <div
                        className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-white
                      "
                      />

                      <div
                        className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-white
                      "
                      />

                      <div
                        className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-white
                      "
                      />

                      <div
                        className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-white
                      "
                      />
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </>
      )}

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