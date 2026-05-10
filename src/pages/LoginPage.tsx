import {
  Crown,
  Sparkles,
  Trophy,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LoginPage() {
  async function handleLogin() {
    console.log("telegram login");
  }

  return (
    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050B16]
      text-white
      flex
      flex-col
      justify-between
      px-6
      py-8
    "
    >
      {/* BACKGROUND GLOWS */}
      <div
        className="
        absolute
        top-[-120px]
        left-[-80px]
        w-[320px]
        h-[320px]
        rounded-full
        bg-yellow-500/20
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        right-[-80px]
        w-[320px]
        h-[320px]
        rounded-full
        bg-blue-500/20
        blur-[120px]
      "
      />

      {/* CONTENT */}
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
          transition={{
            duration: 0.4,
          }}
          className="
          flex
          justify-center
          mt-10
        "
        >
          <div
            className="
            w-36
            h-36
            rounded-[40px]
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
              size={70}
              strokeWidth={2.3}
              className="text-black"
            />
          </div>
        </motion.div>

        {/* PREMIUM BADGE */}
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
          flex
          justify-center
          mt-10
        "
        >
          <div
            className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            border
            border-yellow-500/30
            bg-yellow-500/10
            backdrop-blur-xl
          "
          >
            <Crown
              size={22}
              className="
              text-yellow-400
            "
            />

            <span
              className="
              text-yellow-300
              text-xl
              font-semibold
            "
            >
              Premium tarix platformasi
            </span>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="
          text-center
          mt-10
        "
        >
          <h1
            className="
            text-[72px]
            leading-[0.95]
            font-black
            tracking-[-3px]
          "
          >
            Tarix
            <br />
            Ustozlari
          </h1>

          <p
            className="
            mt-8
            text-[30px]
            leading-relaxed
            text-gray-300
          "
          >
            AI yordamida tarixni
            o‘rganing, arena
            janglarida qatnashing
            va reytingda yuqoriga
            ko‘tariling.
          </p>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          mt-14
          space-y-6
        "
        >
          {/* ITEM */}
          <div
            className="
            flex
            items-center
            gap-5
          "
          >
            <div
              className="
              w-20
              h-20
              rounded-[28px]
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              flex
              items-center
              justify-center
            "
            >
              <Sparkles
                size={34}
                className="
                text-cyan-400
              "
              />
            </div>

            <div>
              <h3
                className="
                text-4xl
                font-bold
              "
              >
                AI Testlar
              </h3>

              <p
                className="
                text-gray-400
                text-2xl
                mt-1
              "
              >
                Smart recommendation system
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div
            className="
            flex
            items-center
            gap-5
          "
          >
            <div
              className="
              w-20
              h-20
              rounded-[28px]
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              flex
              items-center
              justify-center
            "
            >
              <Trophy
                size={34}
                className="
                text-yellow-400
              "
              />
            </div>

            <div>
              <h3
                className="
                text-4xl
                font-bold
              "
              >
                Reyting tizimi
              </h3>

              <p
                className="
                text-gray-400
                text-2xl
                mt-1
              "
              >
                XP va leaderboard
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* LOGIN BUTTON */}
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
          delay: 0.3,
        }}
        className="
        relative
        z-10
        mt-12
      "
      >
        <button
          onClick={handleLogin}
          className="
          w-full
          h-[88px]
          rounded-[32px]
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
          text-black
          text-[34px]
          font-bold
          shadow-2xl
          shadow-yellow-500/30
          flex
          items-center
          justify-center
          gap-4
        "
        >
          <Send size={28} />

          Telegram orqali kirish
        </button>

        <p
          className="
          text-center
          text-gray-500
          text-xl
          leading-relaxed
          mt-8
          px-4
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