import {
  Trophy,
  Flame,
  Star,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

export default function TestResultPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-6 space-y-6">
      {/* GLOWS */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        rounded-full
        bg-yellow-500/20
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
        bg-blue-500/20
        blur-[120px]
      "
      />

      {/* SUCCESS */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className="
        relative
        z-10
        flex
        flex-col
        items-center
        text-center
      "
      >
        <div
          className="
          w-32
          h-32
          rounded-full
          bg-gradient-to-br
          from-yellow-400
          to-yellow-600
          flex
          items-center
          justify-center
          shadow-2xl
          shadow-yellow-500/30
        "
        >
          <Trophy
            size={54}
            className="text-black"
          />
        </div>

        <h1
          className="
          text-5xl
          font-bold
          mt-6
        "
        >
          Ajoyib! 🎉
        </h1>

        <p
          className="
          text-gray-400
          mt-3
          text-lg
        "
        >
          Siz testni muvaffaqiyatli
          yakunladingiz
        </p>
      </motion.div>

      {/* SCORE CARD */}
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
        rounded-[32px]
        p-6
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
          justify-between
        "
        >
          <div>
            <p className="text-gray-400">
              Natija
            </p>

            <h2
              className="
              text-6xl
              font-bold
              mt-2
            "
            >
              18/20
            </h2>
          </div>

          <div
            className="
            w-20
            h-20
            rounded-3xl
            bg-yellow-500/20
            flex
            items-center
            justify-center
          "
          >
            <Star
              size={40}
              className="
              text-yellow-400
            "
            />
          </div>
        </div>

        <div
          className="
          grid
          grid-cols-2
          gap-4
          mt-8
        "
        >
          <div
            className="
            rounded-3xl
            p-5
            bg-white/5
            border
            border-white/10
          "
          >
            <div
              className="
              flex
              items-center
              gap-2
              text-orange-400
            "
            >
              <Flame size={18} />
              Accuracy
            </div>

            <h3
              className="
              text-4xl
              font-bold
              mt-4
            "
            >
              90%
            </h3>
          </div>

          <div
            className="
            rounded-3xl
            p-5
            bg-white/5
            border
            border-white/10
          "
          >
            <div
              className="
              flex
              items-center
              gap-2
              text-green-400
            "
            >
              <CheckCircle2
                size={18}
              />

              To‘g‘ri
            </div>

            <h3
              className="
              text-4xl
              font-bold
              mt-4
            "
            >
              18
            </h3>
          </div>
        </div>
      </motion.div>

      {/* XP REWARD */}
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
        rounded-3xl
        p-6
        bg-gradient-to-r
        from-[#163127]
        to-[#091b15]
        border
        border-green-500/20
      "
      >
        <p className="text-green-400">
          Mukofot
        </p>

        <h2
          className="
          text-5xl
          font-bold
          mt-3
        "
        >
          +240 XP
        </h2>

        <p
          className="
          mt-3
          text-gray-300
        "
        >
          Siz yangi levelga yaqinlashdingiz
        </p>
      </motion.div>

      {/* ACTIONS */}
      <div className="relative z-10 space-y-4 pb-24">
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
          Keyingi test
        </button>

        <button
          className="
          w-full
          py-5
          rounded-3xl
          bg-white/5
          border
          border-white/10
          text-lg
          font-bold
        "
        >
          Asosiy sahifa
        </button>
      </div>
    </div>
  );
}