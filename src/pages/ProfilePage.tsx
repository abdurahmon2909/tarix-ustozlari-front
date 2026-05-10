import {
  Flame,
  Trophy,
  Star,
  BookOpen,
  Crown,
  Medal,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ProfilePage() {
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
        bg-yellow-500/20
        blur-[120px]
      "
      />

      {/* PROFILE CARD */}
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
        rounded-[32px]
        p-6
        bg-gradient-to-br
        from-[#132238]
        to-[#08111d]
        border
        border-white/10
        shadow-2xl
        shadow-blue-500/10
      "
      >
        <div
          className="
          flex
          flex-col
          items-center
          text-center
        "
        >
          <div
            className="
            w-28
            h-28
            rounded-full
            bg-gradient-to-br
            from-yellow-400
            to-yellow-600
            flex
            items-center
            justify-center
            text-4xl
            font-bold
            text-black
            shadow-2xl
            shadow-yellow-500/30
          "
          >
            A
          </div>

          <h1
            className="
            text-3xl
            font-bold
            mt-5
          "
          >
            Abdurahmon
          </h1>

          <p
            className="
            text-gray-400
            mt-2
          "
          >
            Professional tarixchi
          </p>

          <div
            className="
            flex
            items-center
            gap-2
            mt-4
            px-4
            py-2
            rounded-2xl
            bg-yellow-500/10
            border
            border-yellow-500/20
          "
          >
            <Crown
              size={18}
              className="
              text-yellow-400
            "
            />

            <span className="text-yellow-300">
              Premium foydalanuvchi
            </span>
          </div>
        </div>

        {/* XP */}
        <div className="mt-8">
          <div
            className="
            flex
            items-center
            justify-between
          "
          >
            <p className="text-gray-400">
              Level 12
            </p>

            <p className="text-yellow-400">
              1840 / 2500 XP
            </p>
          </div>

          <div
            className="
            w-full
            h-3
            rounded-full
            bg-white/10
            overflow-hidden
            mt-3
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
            Streak
          </div>

          <h2
            className="
            text-4xl
            font-bold
            mt-4
          "
          >
            32
          </h2>

          <p className="text-gray-400 mt-1">
            kun
          </p>
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
            text-yellow-400
          "
          >
            <Trophy size={18} />
            Reyting
          </div>

          <h2
            className="
            text-4xl
            font-bold
            mt-4
          "
          >
            #12
          </h2>

          <p className="text-gray-400 mt-1">
            global
          </p>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div
        className="
        relative
        z-10
      "
      >
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
            Achievementlar
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
            min-w-[180px]
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#1a2d4a]
            to-[#0b1523]
            border
            border-white/10
          "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-yellow-500/20
              flex
              items-center
              justify-center
            "
            >
              <Medal
                className="
                text-yellow-400
              "
              />
            </div>

            <h3
              className="
              text-xl
              font-bold
              mt-5
            "
            >
              Top 10
            </h3>

            <p
              className="
              text-gray-400
              mt-2
              text-sm
            "
            >
              Leaderboard top 10
            </p>
          </div>

          {/* CARD */}
          <div
            className="
            min-w-[180px]
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#2b173f]
            to-[#12091d]
            border
            border-white/10
          "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-pink-500/20
              flex
              items-center
              justify-center
            "
            >
              <Star
                className="
                text-pink-400
              "
              />
            </div>

            <h3
              className="
              text-xl
              font-bold
              mt-5
            "
            >
              Elite
            </h3>

            <p
              className="
              text-gray-400
              mt-2
              text-sm
            "
            >
              10 000 XP to‘plandi
            </p>
          </div>

          {/* CARD */}
          <div
            className="
            min-w-[180px]
            rounded-3xl
            p-5
            bg-gradient-to-br
            from-[#163127]
            to-[#091b15]
            border
            border-white/10
          "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-green-500/20
              flex
              items-center
              justify-center
            "
            >
              <BookOpen
                className="
                text-green-400
              "
              />
            </div>

            <h3
              className="
              text-xl
              font-bold
              mt-5
            "
            >
              Bilimdon
            </h3>

            <p
              className="
              text-gray-400
              mt-2
              text-sm
            "
            >
              1000 savol ishlangan
            </p>
          </div>
        </div>
      </div>

      {/* MOTIVATION */}
      <div
        className="
        relative
        z-10
        rounded-3xl
        p-6
        bg-gradient-to-r
        from-[#132238]
        to-[#0b1523]
        border
        border-yellow-500/10
      "
      >
        <h2
          className="
          text-2xl
          font-bold
        "
        >
          Davom eting 🚀
        </h2>

        <p
          className="
          mt-4
          text-gray-300
          leading-relaxed
        "
        >
          Har kuni test ishlash orqali
          XP yig‘ing va tarix
          masteriga aylaning.
        </p>
      </div>
    </div>
  );
}