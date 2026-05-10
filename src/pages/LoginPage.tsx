import {
  Crown,
  Sparkles,
  Trophy,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LoginPage() {
  async function handleLogin() {
    try {
      const tg =
        (window as any).Telegram?.WebApp;

      tg?.ready();

      const user =
        tg?.initDataUnsafe?.user;

      console.log("TG:", tg);
      console.log("USER:", user);

      if (!user) {
        alert(
          "Telegram user topilmadi. Mini App ichida oching."
        );
        return;
      }

      const response = await fetch(
        "https://web-production-7002f.up.railway.app/api/v1/auth/telegram",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            telegram_id: user.id,
            username:
              user.username ||
              user.first_name,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        alert(
          data.detail ||
            "Login error"
        );
        return;
      }

      localStorage.setItem(
        "token",
        data.access_token
      );

      window.location.href = "/";
    } catch (error) {
      console.error(error);

      alert("Login error");
    }
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
      px-5
      py-6
    "
    >
      {/* GLOWS */}
      <div
        className="
        absolute
        top-[-120px]
        left-[-80px]
        w-[280px]
        h-[280px]
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
        w-[280px]
        h-[280px]
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
          className="
          flex
          justify-center
          mt-6
        "
        >
          <div
            className="
            w-28
            h-28
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
              size={54}
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
          mt-8
        "
        >
          <div
            className="
            flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-yellow-500/30
            bg-yellow-500/10
          "
          >
            <Crown
              size={18}
              className="
              text-yellow-400
            "
            />

            <span
              className="
              text-yellow-300
              text-base
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
          mt-8
        "
        >
          <h1
            className="
            text-[58px]
            leading-[0.95]
            font-black
            tracking-[-2px]
          "
          >
            Tarix
            <br />
            Ustozlari
          </h1>

          <p
            className="
            mt-6
            text-[22px]
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
          mt-10
          space-y-5
        "
        >
          {/* AI */}
          <div
            className="
            flex
            items-center
            gap-4
          "
          >
            <div
              className="
              w-16
              h-16
              rounded-[24px]
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
            "
            >
              <Sparkles
                size={28}
                className="
                text-cyan-400
              "
              />
            </div>

            <div>
              <h3
                className="
                text-2xl
                font-bold
              "
              >
                AI Testlar
              </h3>

              <p
                className="
                text-gray-400
                text-lg
              "
              >
                Smart recommendation
              </p>
            </div>
          </div>

          {/* XP */}
          <div
            className="
            flex
            items-center
            gap-4
          "
          >
            <div
              className="
              w-16
              h-16
              rounded-[24px]
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
            "
            >
              <Trophy
                size={28}
                className="
                text-yellow-400
              "
              />
            </div>

            <div>
              <h3
                className="
                text-2xl
                font-bold
              "
              >
                Reyting tizimi
              </h3>

              <p
                className="
                text-gray-400
                text-lg
              "
              >
                XP va leaderboard
              </p>
            </div>
          </div>
        </motion.div>
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
          delay: 0.3,
        }}
        className="
        relative
        z-10
        mt-10
      "
      >
        <button
          onClick={handleLogin}
          className="
          w-full
          h-[74px]
          rounded-[28px]
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
          text-black
          text-[26px]
          font-bold
          shadow-2xl
          shadow-yellow-500/30
          flex
          items-center
          justify-center
          gap-3
        "
        >
          <Send size={22} />

          Telegram orqali kirish
        </button>

        <p
          className="
          text-center
          text-gray-500
          text-base
          leading-relaxed
          mt-6
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