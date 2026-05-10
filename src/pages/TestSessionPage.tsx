import {
  Clock3,
  ChevronLeft,
  Flag,
  Check,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  testQuestions,
  MatchingItem,
} from "../data/testQuestions";

export default function TestSessionPage() {
  const navigate =
    useNavigate();

  const [
    currentQuestion,
    setCurrentQuestion,
  ] = useState(0);

  const [score, setScore] =
    useState(0);

  const [
    selectedMcq,
    setSelectedMcq,
  ] = useState<number | null>(
    null
  );

  const [timeLeft, setTimeLeft] =
    useState(30 * 60);

  const currentData =
    testQuestions[
      currentQuestion
    ];

  const questionType =
    currentData.type;

  /* =========================
      TIMER
  ========================= */

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate(
        "/test-result",
        {
          state: {
            score,
            total:
              testQuestions.length,
          },
        }
      );

      return;
    }

    const interval =
      setInterval(() => {
        setTimeLeft(
          (prev) => prev - 1
        );
      }, 1000);

    return () =>
      clearInterval(interval);
  }, [
    timeLeft,
    navigate,
    score,
  ]);

  /* =========================
      NEXT QUESTION
  ========================= */

  const nextQuestion = () => {
    let updatedScore = score;

    if (
      questionType === "mcq" &&
      selectedMcq ===
        currentData.correctAnswer
    ) {
      updatedScore += 1;

      setScore(updatedScore);
    }

    const isLastQuestion =
      currentQuestion + 1 >=
      testQuestions.length;

    if (isLastQuestion) {
      navigate(
        "/test-result",
        {
          state: {
            score:
              updatedScore,
            total:
              testQuestions.length,
          },
        }
      );

      return;
    }

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
            {currentQuestion + 1}
            {" / "}
            {
              testQuestions.length
            }
          </h2>
        </div>

        {/* TIMER */}
        <div
          className={`
            px-4
            py-3
            rounded-2xl
            border
            flex
            items-center
            gap-2
            transition-all

            ${
              timeLeft <= 60
                ? `
                border-red-500/40
                bg-red-500/10
              `
                : `
                border-white/10
                bg-white/5
              `
            }
          `}
        >
          <Clock3
            size={18}
            className={`
              ${
                timeLeft <= 60
                  ? "text-red-400"
                  : "text-yellow-400"
              }
            `}
          />

          <span
            className="
            text-sm
            font-medium
          "
          >
            {String(
              Math.floor(
                timeLeft / 60
              )
            ).padStart(2, "0")}
            :
            {String(
              timeLeft % 60
            ).padStart(2, "0")}
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
            transition-all
            duration-500
          "
            style={{
              width: `${
                ((currentQuestion +
                  1) /
                  testQuestions.length) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      {/* =========================
          MCQ
      ========================= */}

      {questionType === "mcq" && (
        <>
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
              {
                currentData.question
              }
            </p>
          </motion.div>

          <div
            className="
            relative
            z-10
            mt-6
            space-y-4
          "
          >
            {currentData.answers?.map(
              (
                answer: string,
                index: number
              ) => (
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
                        currentData.correctAnswer
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
                            currentData.correctAnswer
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
                          currentData.correctAnswer && (
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
                          currentData.correctAnswer && (
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
              {
                currentData.question
              }
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
            {currentData.matching?.map(
              (
                item: MatchingItem,
                index: number
              ) => (
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
                      <option>
                        Tanlang
                      </option>

                      {currentData.matching.map(
                        (
                          option: MatchingItem,
                          optionIndex: number
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

      {/* =========================
          CHRONOLOGY
      ========================= */}

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
              {
                currentData.question
              }
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
            {currentData.chronology?.map(
              (
                event: string,
                index: number
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
                </motion.div>
              )
            )}
          </div>
        </>
      )}

      {/* =========================
          MAP
      ========================= */}

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
              {
                currentData.question
              }
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
              bg-gradient-to-br
              from-[#1d324f]
              via-[#223a5c]
              to-[#16253b]
            "
            >
              <div
                className="
                absolute
                inset-0
                opacity-10
                bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
                bg-[size:32px_32px]
              "
              />

              {currentData.mapRegions?.map(
                (
                  region: string,
                  index: number
                ) => (
                  <motion.button
                    key={index}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                    absolute
                    px-4
                    py-2
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/10
                    text-sm
                    font-semibold
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
                  </motion.button>
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
          {currentQuestion + 1 >=
          testQuestions.length
            ? "Yakunlash"
            : "Keyingi →"}
        </button>
      </motion.div>
    </div>
  );
}