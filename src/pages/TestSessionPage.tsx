import {
  Clock3,
  ChevronLeft,
  Flag,
  Check,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  useMemo,
  useState,
} from "react";

type QuestionType =
  | "mcq"
  | "matching"
  | "chronology"
  | "map";

const questions: QuestionType[] = [
  "mcq",
  "matching",
  "chronology",
  "map",
];

const mcqAnswers = [
  "Sovet Ittifoqi",
  "Rossiya imperiyasi",
  "Rossiya Respublikasi",
  "Sotsialistik davlat",
];

const correctAnswer = 2;

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

const chronologyEvents = [
  "Amir Temur tavalludi",
  "Temuriylar davlati tashkil topdi",
  "Anqara jangi",
  "Amir Temur vafoti",
];

const mapRegions = [
  "Farg‘ona vodiysi",
  "Samarqand",
  "Buxoro",
  "Xorazm",
];

export default function TestSessionPage() {
  const [
    currentQuestion,
    setCurrentQuestion,
  ] = useState(0);

  const [
    selectedMcq,
    setSelectedMcq,
  ] = useState<number | null>(
    null
  );

  const questionType = useMemo(
    () =>
      questions[
        currentQuestion %
          questions.length
      ],
    [currentQuestion]
  );

  const nextQuestion = () => {
    setCurrentQuestion(
      (prev) => prev + 1
    );

    setSelectedMcq(null);
  };

  return (
    <div className="relative pt-2 pb-10">
      {/* BG */}
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
            {currentQuestion + 1}
            {" / "}
            30
          </h2>
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
      <div
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
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            to-yellow-600
          "
            style={{
              width: `${
                ((currentQuestion +
                  1) /
                  30) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      {/* MCQ */}
      {questionType === "mcq" && (
        <>
          <div
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
              1917-yil fevral
              inqilobi natijasida
              Rossiyada qaysi
              davlat tuzildi?
            </p>
          </div>

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
                  onClick={() =>
                    setSelectedMcq(
                      index
                    )
                  }
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
                      selectedMcq !==
                        null &&
                      index ===
                        correctAnswer
                        ? `
                        border-green-500/40
                        bg-green-500/10
                      `
                        : index ===
                          selectedMcq
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
                    <div
                      className="
                      flex
                      items-center
                      gap-4
                    "
                    >
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
                          selectedMcq !==
                            null &&
                          index ===
                            correctAnswer
                            ? `
                            border-green-400
                            bg-green-400
                          `
                            : index ===
                              selectedMcq
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
                        {selectedMcq !==
                          null &&
                          index ===
                            correctAnswer && (
                            <Check
                              size={14}
                              className="
                              text-black
                            "
                            />
                          )}

                        {index ===
                          selectedMcq &&
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

                      <span
                        className="
                        text-lg
                        font-medium
                      "
                      >
                        {String.fromCharCode(
                          65 + index
                        )}
                        ){" "}
                        {answer}
                      </span>
                    </div>
                  </div>
                </motion.button>
              )
            )}
          </div>
        </>
      )}

      {/* MATCHING */}
      {questionType ===
        "matching" && (
        <>
          <div
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
              font-semibold
            "
            >
              Moslashtiring
            </p>
          </div>

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
                <div
                  key={index}
                  className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                "
                >
                  <div className="space-y-4">
                    <div
                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-4
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
                    "
                    >
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
                </div>
              )
            )}
          </div>
        </>
      )}

      {/* CHRONOLOGY */}
      {questionType ===
        "chronology" && (
        <>
          <div
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
              font-semibold
            "
            >
              Ketma-ketlikda
              joylashtiring
            </p>
          </div>

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
                <div
                  key={index}
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

                    <p
                      className="
                      text-lg
                      font-semibold
                    "
                    >
                      {event}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}

      {/* MAP */}
      {questionType === "map" && (
        <>
          <div
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
              font-semibold
            "
            >
              Xaritadan
              Farg‘ona vodiysini
              belgilang
            </p>
          </div>

          <div
            className="
            relative
            z-10
            mt-6
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-br
            from-[#132238]
            to-[#0a1422]
          "
          >
            <div
              className="
              relative
              h-[420px]
            "
            >
              {mapRegions.map(
                (
                  region,
                  index
                ) => (
                  <button
                    key={index}
                    className="
                    absolute
                    px-4
                    py-2
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/10
                    backdrop-blur-xl
                  "
                    style={{
                      top: `${
                        20 +
                        index * 18
                      }%`,
                      left: `${
                        15 +
                        index * 20
                      }%`,
                    }}
                  >
                    {region}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}

      {/* ACTIONS */}
      <motion.div
        className="
        relative
        z-10
        mt-8
        grid
        grid-cols-2
        gap-4
      "
      >
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

        <button
          onClick={nextQuestion}
          disabled={
            questionType ===
              "mcq" &&
            selectedMcq === null
          }
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
          disabled:opacity-40
          disabled:cursor-not-allowed
        "
        >
          Keyingi →
        </button>
      </motion.div>
    </div>
  );
}