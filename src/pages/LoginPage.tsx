import {
  Crown,
  Sparkles,
  Trophy,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LoginPage() {
  async function handleLogin() {
    console.log("Telegram auth");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071120] flex flex-col justify-between px-6 py-10">
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

      {/* TOP */}
      <div className="relative z-10">
        {/* LOGO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="
          w-24
          h-24
          rounded-[32px]
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
          <Crown
            size={42}
            className="text-black"
          />
        </motion.div>

        {/* TITLE */}
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
          className="mt-10"
        >
          <p className="text-yellow-400">
            Premium tarix platformasi
          </p>

          <h1
            className="
            text-6xl
            font-bold
            mt-4
            leading-tight
          "
          >
            Tarix
            <br />
            Ustozlari
          </h1>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
            mt-6
          "
          >
            AI yordamida tarixni
            o‘rganing, arena janglarida
            qatnashing va reytingda
            yuqoriga ko‘tariling.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="mt-10 space-y-4">
          <div
            className="
            flex
            items-center
            gap-4
          "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
            "
            >
              <Sparkles
                className="
                text-cyan-400
              "
              />
            </div>

            <div>
              <h3
                className="
                text-xl
                font-bold
              "
              >
                AI Testlar
              </h3>

              <p className="text-gray-400">
                Smart recommendation system
              </p>
            </div>
          </div>

          <div
            className="
            flex
            items-center
            gap-4
          "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
            "
            >
              <Trophy
                className="
                text-yellow-400
              "
              />
            </div>

            <div>
              <h3
                className="
                text-xl
                font-bold
              "
              >
                Reyting tizimi
              </h3>

              <p className="text-gray-400">
                XP va leaderboard
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
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
      "
      >
        <button
          onClick={handleLogin}
          className="
          w-full
          py-5
          rounded-3xl
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
          text-black
          text-xl
          font-bold
          shadow-2xl
          shadow-yellow-500/30
        "
        >
          Telegram orqali kirish
        </button>

        <p
          className="
          text-center
          text-gray-500
          mt-5
        "
        >
          Davom etish orqali siz
          platforma qoidalariga
          rozilik bildirasiz.
        </p>
      </motion.div>
    </div>
  );
}