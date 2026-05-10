import {
  Flame,
  Trophy,
  Star,
  Medal,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

const achievements = [
  {
    title:
      "10 ta test yakunlandi",
    icon: Trophy,
  },

  {
    title:
      "3 kunlik streak",
    icon: Flame,
  },

  {
    title:
      "TOP 20 talik",
    icon: Medal,
  },

  {
    title:
      "500 XP yig‘ildi",
    icon: Star,
  },
];

export default function ProfilePage() {
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
      "
      >
        {/* USER CARD */}
        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#132238]
          to-[#0a1422]
          p-6
          shadow-2xl
          shadow-yellow-500/10
        "
        >
          {/* TOP */}
          <div
            className="
            flex
            items-center
            gap-4
          "
          >
            {/* AVATAR */}
            <div
              className="
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-yellow-400
              to-yellow-600
              flex
              items-center
              justify-center
              text-black
              text-3xl
              font-black
              shadow-xl
              shadow-yellow-500/20
            "
            >
              A
            </div>

            {/* INFO */}
            <div className="flex-1">
              <h1
                className="
                text-2xl
                font-black
              "
              >
                Abdurahmon
              </h1>

              <p
                className="
                mt-1
                text-gray-400
              "
              >
                Premium tarixchi
              </p>

              {/* RANK */}
              <div
                className="
                mt-3
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-yellow-500/10
                px-4
                py-2
                text-yellow-300
                text-sm
                font-semibold
              "
              >
                <Trophy size={16} />

                TOP 12%
              </div>
            </div>
          </div>

          {/* XP */}
          <div className="mt-8">
            <div
              className="
              flex
              items-center
              justify-between
              mb-3
            "
            >
              <p
                className="
                text-sm
                text-gray-400
              "
              >
                LEVEL 7
              </p>

              <p
                className="
                text-sm
                text-yellow-300
              "
              >
                720 / 1000 XP
              </p>
            </div>

            <div
              className="
              w-full
              h-4
              rounded-full
              bg-white/10
              overflow-hidden
            "
            >
              <div
                className="
                h-full
                w-[72%]
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

      {/* STATS */}
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
        mt-6
        grid
        grid-cols-2
        gap-4
      "
      >
        {/* TESTS */}
        <div
          className="
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.03]
          p-5
        "
        >
          <p
            className="
            text-gray-400
            text-sm
          "
          >
            Testlar
          </p>

          <h2
            className="
            mt-2
            text-3xl
            font-black
          "
          >
            148
          </h2>
        </div>

        {/* STREAK */}
        <div
          className="
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.03]
          p-5
        "
        >
          <p
            className="
            text-gray-400
            text-sm
          "
          >
            Streak
          </p>

          <h2
            className="
            mt-2
            text-3xl
            font-black
            text-yellow-400
          "
          >
            3 🔥
          </h2>
        </div>
      </motion.div>

      {/* ACHIEVEMENTS */}
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
            Achievementlar
          </h2>

          <button
            className="
            text-sm
            text-yellow-300
          "
          >
            Barchasi
          </button>
        </div>

        {/* LIST */}
        <div
          className="
          mt-4
          space-y-4
        "
        >
          {achievements.map(
            (
              item,
              index
            ) => {
              const Icon =
                item.icon;

              return (
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
                        bg-yellow-500/10
                        flex
                        items-center
                        justify-center
                      "
                      >
                        <Icon
                          className="
                          text-yellow-400
                        "
                        />
                      </div>

                      {/* TEXT */}
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
                          Achievement ochildi
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className="
                      text-gray-500
                    "
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </motion.div>
    </div>
  );
}