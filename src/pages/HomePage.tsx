import {
  Bell,
  Flame,
  Trophy,
  Sparkles,
  BookOpen,
  Swords,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pt-6 space-y-6 pb-6">
      {/* GLOWS */}
      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        bg-yellow-500/20
        blur-[120px]
        rounded-full
      "
      />

      <div
        className="
        absolute
        top-40
        right-0
        w-72
        h-72
        bg-blue-500/20
        blur-[120px]
        rounded-full
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
        <div
          className="
          flex
          items-center
          gap-4
        "
        >
          <div
            className="
            relative
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-yellow-400
            to-yellow-600
            flex
            items-center
            justify-center
            text-black
            text-xl
            font-bold
            shadow-lg
            shadow-yellow-500/30
          "
          >
            A

            <div
              className="
              absolute
              -bottom-1
              -right-1
              w-5
              h-5
              rounded-full
              bg-green-400
              border-2
              border-[#050B16]
            "
            />
          </div>

          <div>
            <p
              className="
              text-gray-400
              text-sm
            "
            >
              Xush kelibsiz 👋
            </p>

            <h1
              className="
              text-3xl
              font-bold
            "
            >
              Abdurahmon
            </h1>
          </div>
        </div>

        <button
          className="
          relative
          w-14
          h-14
          rounded-2xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          backdrop-blur-xl
        "
        >
          <Bell size={22} />

          <div
            className="
            absolute
            top-3
            right-3
            w-2
            h-2
            rounded-full
            bg-yellow-400
          "
          />
        </button>
      </motion.div>

      {/* HERO */}
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
        overflow-hidden
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
          absolute
          -top-10
          -right-10
          w-40
          h-40
          rounded-full
          bg-yellow-500/10
          blur-[80px]
        "
        />

        <div className="relative z-10">
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <div>
              <p className="text-gray-400">
                Level 12
              </p>

              <h2
                className="
                text-5xl
                font-bold
                mt-2
              "
              >
                1840 XP
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
              <Trophy
                size={40}
                className="
                text-yellow-400
              "
              />
            </div>
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
              <span className="text-gray-400">
                Next level
              </span>

              <span className="text-yellow-400">
                74%
              </span>
            </div>

            <div
              className="
              w-full
              h-3
              bg-white/10
              rounded-full
              overflow-hidden
            "
            >
              <div
                className="
                h-full
                w-[74%]
                rounded-full
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
              "
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* QUICK ACTIONS */}
      <div
        className="
        relative
        z-10
        grid
        grid-cols-4
        gap-3
      "
      >
        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <BookOpen
            className="
            text-yellow-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            Tests
          </span>
        </button>

        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <Sparkles
            className="
            text-cyan-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            AI
          </span>
        </button>

        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <Swords
            className="
            text-red-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            Arena
          </span>
        </button>

        <button
          className="
          rounded-3xl
          p-4
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          flex
          flex-col
          items-center
          gap-2
        "
        >
          <Brain
            className="
            text-purple-400
          "
          />

          <span
            className="
            text-xs
            font-medium
          "
          >
            IQ
          </span>
        </button>
      </div>

      {/* DAILY CHALLENGE */}
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
        rounded-3xl
        p-5
        bg-gradient-to-br
        from-[#10233c]
        to-[#08111d]
        border
        border-white/10
        shadow-xl
        shadow-blue-500/10
      "
      >
        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-orange-500/20
            flex
            items-center
            justify-center
          "
          >
            <Flame
              className="
              text-orange-400
            "
            />
          </div>

          <div>
            <p className="text-gray-400">
              Daily Challenge
            </p>

            <h2
              className="
              text-2xl
              font-bold
            "
            >
              Jadidlar davri
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
          text-lg
        "
        >
          Boshlash
        </button>
      </motion.div>

      {/* STATS */}
      <div
        className="
        relative
        z-10
        grid
        grid-cols-2
        gap-4
      "
      >
        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
        "
        >
          <p className="text-gray-400">
            Reyting
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            #12
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          p-5
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
        "
        >
          <p className="text-gray-400">
            Streak
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            12 🔥
          </h2>
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="relative z-10">
        <div
          className="
          flex
          items-center
          justify-between
          mb-4
        "
        >
          <h2
            className="
            text-2xl
            font-bold
          "
          >
            Tavsiya etiladi
          </h2>

          <button className="text-yellow-400">
            Barchasi
          </button>
        </div>

        <div
          className="
          flex
          gap-4
          overflow-x-auto
          pb-2
        "
        >
          {/* CARD */}
          <div
            className="
            min-w-[260px]
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#1a2d4a]
            to-[#0b1523]
            border
            border-white/10
          "
          >
            <p className="text-gray-400">
              O‘zbekiston tarixi
            </p>

            <h3
              className="
              text-2xl
              font-bold
              mt-2
            "
            >
              Temuriylar
            </h3>

            <div
              className="
              flex
              items-center
              justify-between
              mt-6
            "
            >
              <span className="text-yellow-400">
                120 XP
              </span>

              <button
                className="
                px-4
                py-2
                rounded-xl
                bg-yellow-400
                text-black
                font-bold
              "
              >
                Boshlash
              </button>
            </div>
          </div>

          {/* CARD */}
          <div
            className="
            min-w-[260px]
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#2b173f]
            to-[#12091d]
            border
            border-white/10
          "
          >
            <p className="text-gray-400">
              Jahon tarixi
            </p>

            <h3
              className="
              text-2xl
              font-bold
              mt-2
            "
            >
              Sovuq urush
            </h3>

            <div
              className="
              flex
              items-center
              justify-between
              mt-6
            "
            >
              <span className="text-pink-400">
                180 XP
              </span>

              <button
                className="
                px-4
                py-2
                rounded-xl
                bg-pink-500
                text-white
                font-bold
              "
              >
                Boshlash
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-6
        bg-gradient-to-r
        from-[#0f1d31]
        to-[#08111d]
        border
        border-yellow-500/10
      "
      >
        <p
          className="
          text-xl
          leading-relaxed
          font-medium
        "
        >
          “Tarixni bilmagan xalqning
          kelajagi yo‘q.”
        </p>

        <p
          className="
          text-yellow-400
          mt-4
        "
        >
          — Mirzo Ulug‘bek
        </p>
      </div>

      {/* AI CARD */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-6
        bg-gradient-to-br
        from-[#132238]
        to-[#0a1422]
        border
        border-cyan-500/20
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
            <p className="text-cyan-400">
              AI Tavsiya
            </p>

            <h2
              className="
              text-2xl
              font-bold
              mt-2
            "
            >
              Sizga mos test
            </h2>
          </div>

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-cyan-500/20
            flex
            items-center
            justify-center
          "
          >
            🤖
          </div>
        </div>

        <p
          className="
          mt-4
          text-gray-300
          leading-relaxed
        "
        >
          Siz Temuriylar mavzusida
          yuqori natija
          ko‘rsatgansiz.
          Keyingi tavsiya:
          Jadidlar harakati.
        </p>

        <button
          className="
          mt-5
          w-full
          py-4
          rounded-2xl
          bg-cyan-400
          text-black
          font-bold
        "
        >
          AI testni boshlash
        </button>
      </div>
    </div>
  );
}